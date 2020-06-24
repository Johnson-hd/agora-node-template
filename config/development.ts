import { config } from './model'

const _config: config = {
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    database: 'demo',
    username: 'root',
    password: '',
    logging: false,
    entities: ['src/models/db/*.ts'],
  },
  enterpriseWx: {
    url: 'your enterprisewx robot url',
    mentionedMobileList: [],
  },
}
export default _config
