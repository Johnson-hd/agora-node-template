import { Context, Next } from 'koa'

const auth = async (ctx: Context, next: Next) => {
  if (!ctx.auth) {
    ctx.response.status = 401
    return
  }
  await next()
}

export default auth
