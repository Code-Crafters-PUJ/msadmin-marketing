const getEnvVariable = (name: string, defaultValue?: string): string => {
  const value = process.env[name]
  if (value === undefined) {
    if (defaultValue === undefined) {
      throw new Error(`Environment variable ${name} is not defined`)
    }
    return defaultValue
  }
  return value
}

export const PORT: number = parseInt(getEnvVariable('PORT', '3000'))

export const JWT_SECRET: string = getEnvVariable('JWT_SECRET')
