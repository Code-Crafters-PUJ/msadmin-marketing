import { NextFunction, Request, Response } from 'express'

import { hasAdminRole, hasSupportRole } from '../helpers/jwt'

export const validateSupportRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers

  if (!authorization) {
    res.status(401).json({ error: 'No autorizado' })
    return
  }

  if (!hasSupportRole(authorization as string)) {
    res
      .status(403)
      .json({ error: 'No tienes permisos para realizar esta operación' })
    return
  }

  next()
}

export const validateSupportOrAdminRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers

  if (!authorization) {
    res.status(401).json({ error: 'No autorizado' })
    return
  }

  if (
    !(
      hasSupportRole(authorization as string) ||
      hasAdminRole(authorization as string)
    )
  ) {
    res
      .status(403)
      .json({ error: 'No tienes permisos para realizar esta operación' })
    return
  }

  next()
}
