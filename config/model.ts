export interface config {
  mysql: mysql
  enterpriseWx: enterpriseWx
}

interface mysql {
  host: string
  port: number
  dialect: string
  database: string
  username: string
  password: string
  logging: boolean
  timezone: string
  entities: string[]
}

interface enterpriseWx {
  url: string
  mentionedMobileList: string[]
}
