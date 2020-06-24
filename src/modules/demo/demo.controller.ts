import { Context } from 'koa'
import { HttpMethod, Route, Controller } from 'agora-koa-decorator'

import authMiddleware from '../../middlewares/auth'
import logMiddleware from '../../middlewares/log'
import { getDBContent } from './demo.service'
import { Code } from '../../models/code'
import { Response } from '../../models/response'
import { TDemo } from '../../models/db/t-demo'

@Controller('/demo', logMiddleware)
export default class User {
  @Route('/', HttpMethod.GET)
  async testGet(ctx: Context) {
    ctx.body = <Response<any>>{
      code: Code.Ok,
      msg: 'get /demo',
      data: {},
    }
  }

  @Route('/post', HttpMethod.POST, authMiddleware)
  async testPost(ctx: Context) {
    ctx.body = <Response<any>>{
      code: Code.Ok,
      msg: 'post /demo/test by middleware',
      data: {},
    }
  }

  @Route('/db', HttpMethod.GET)
  async testDB(ctx: Context) {
    const data = await getDBContent()
    ctx.body = <Response<TDemo[]>>{
      code: Code.Ok,
      msg: 'get /demo/db db',
      data: data,
    }
  }
}
