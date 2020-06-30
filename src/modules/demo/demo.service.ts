import { getManager } from 'typeorm'

import { TDemo } from '../../models/db/t-demo'

export const GetDBContent = async () => {
  const data = await getManager().createQueryBuilder(TDemo, 'tDemo').getMany()
  return data
}
