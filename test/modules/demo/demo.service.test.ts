import { GetDBContent } from '../../../src/modules/demo/demo.service'
import assert from 'assert'

import DB from '../../db'

describe('Test Demo Controller', () => {
  it('Test GetDBContent', async () => {
    await DB.initDB()
    const res = await GetDBContent()
    assert.ok(res)
  })
})
