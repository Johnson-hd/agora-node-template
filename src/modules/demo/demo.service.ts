import { getManager, getConnection } from 'typeorm'

import { TDemo } from '../../models/db/t-demo'

export const GetDBContent = async () => {
  const data = await getManager().createQueryBuilder(TDemo, 'tDemo').getMany()
  return data
}

export const CreateDBContent = async () => {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(TDemo)
    .values([{ name: 'Test', description: 'Test Description', createdAt: new Date() }])
    .execute()
}
