import { config } from './model'

const _config: config = {
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    database: 'your database name',
    username: 'your mysql username',
    password: 'your mysql password',
    timezone: '+08:00',
    logging: false,
    connectionLimit: 20,
    pool: {
      max: 10,
      min: 1,
      idle: 1000,
    },
  },
  enterpriseWx: {
    url: 'your enterprisewx robot url',
    mentionedMobileList: [],
  },
}
export default _config
