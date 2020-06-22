import { Context } from 'koa'
import { HttpMethod, Route, Controller } from 'agora-koa-decorator'

import authMiddleware from '../../middlewares/auth'
import logMiddleware from '../../middlewares/log'
import { getDBContent } from './demo.service'
import code from '../../models/code'

@Controller('/demo', logMiddleware)
export default class User {
  @Route('/', HttpMethod.GET)
  async testGet(ctx: Context) {
    ctx.body = {
      code: code.Ok,
      msg: 'get /demo',
      data: {},
    }
  }

  @Route('/post', HttpMethod.POST, authMiddleware)
  async testPost(ctx: Context) {
    ctx.body = {
      code: code.Ok,
      msg: 'post /demo/test by middleware',
      data: {},
    }
  }

  @Route('/db', HttpMethod.GET)
  async testDB(ctx: Context) {
    const data = await getDBContent()
    console.log('data', data)
    ctx.body = {
      code: code.Ok,
      msg: 'get /demo/db db',
      data: data,
    }
  }
}
