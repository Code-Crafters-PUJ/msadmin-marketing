import cors from 'cors'
import express, { Request, Response } from 'express'

import { PORT } from './config/environment'
import {
  validateSupportOrAdminRole,
  validateSupportRole,
} from './middlewares/validate-role'
import mockData from './mockData'

const app = express()

app.use(cors())

app.get(
  '/api/emails/visualization',
  [validateSupportOrAdminRole],
  (req: Request, res: Response): void => {
    res.json({ percentage: mockData.emails.visualizacion })
  }
)

app.get('/api/users/landing', (req: Request, res: Response): void => {
  res.json({
    users: mockData.landingPage.users,
    count: mockData.landingPage.users.length,
  })
})

app.get(
  '/api/formas-de-enterarse',
  [validateSupportOrAdminRole],
  (req: Request, res: Response): void => {
    res.json({ formasDeEnterarse: mockData.formasDeEnterarse })
  }
)

app.get(
  '/api/history-users',
  [validateSupportOrAdminRole],
  (req: Request, res: Response): void => {
    res.json({ history: mockData.historialDudas })
  }
)

app.post(
  '/api/request/manage',
  [validateSupportRole],
  (req: Request, res: Response): void => {
    if (!req.body.adressee || !req.body.subject || !req.body.description) {
      res
        .status(400)
        .json({ message: 'Adressee, subject and description are required' })
    }

    res.json({ message: 'Request successfuly registered' })
  }
)

app.listen(PORT, (): void => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
