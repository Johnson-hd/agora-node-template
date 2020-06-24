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
  entities: string[]
}

interface enterpriseWx {
  url: string
  mentionedMobileList: string[]
}
