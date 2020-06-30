import { Context } from 'koa'
import { HttpMethod, Route, Controller } from 'agora-koa-decorator'

import AuthMiddleware from '../../middlewares/auth'
import LogMiddleware from '../../middlewares/log'
import { GetDBContent } from './demo.service'
import { Code } from '../../models/code'
import { Response } from '../../models/response'
import { TDemo } from '../../models/db/t-demo'

@Controller('/demo', LogMiddleware)
export default class Demo {
  @Route('/', HttpMethod.GET)
  async TestGet(ctx: Context) {
    ctx.body = <Response<any>>{
      code: Code.Ok,
      msg: 'get /demo',
      data: {},
    }
  }

  @Route('/post', HttpMethod.POST, AuthMiddleware)
  async TestPost(ctx: Context) {
    ctx.body = <Response<any>>{
      code: Code.Ok,
      msg: 'post /demo/test by middleware',
      data: {},
    }
  }

  @Route('/db', HttpMethod.GET)
  async TestDB(ctx: Context) {
    const data = await GetDBContent()
    ctx.body = <Response<TDemo[]>>{
      code: Code.Ok,
      msg: 'get /demo/db db',
      data: data,
    }
  }
}
