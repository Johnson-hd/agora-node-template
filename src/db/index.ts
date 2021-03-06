import { createConnection } from 'typeorm'

import config from '../../config'

const mysql = config.mysql

export const initDB = async () => {
  await createConnection({
    type: mysql.dialect,
    host: mysql.host,
    port: mysql.port,
    username: mysql.username,
    password: mysql.password,
    database: mysql.database,
    entities: mysql.entities,
    logging: mysql.logging,
    timezone: mysql.timezone,
  })
}
