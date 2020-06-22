export interface config {
  mysql: mysql
  enterpriseWx: enterpriseWx
}

interface mysqlPool {
  max: number
  min: number
  idle: number
}

interface mysql {
  host: string
  port: number
  dialect: string
  database: string
  username: string
  password: string
  timezone: string
  logging: boolean
  connectionLimit: number
  pool: mysqlPool
}

interface enterpriseWx {
  url: string
  mentionedMobileList: string[]
}
