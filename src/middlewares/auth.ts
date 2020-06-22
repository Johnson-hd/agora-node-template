import { Context, Next } from 'Koa'

const auth = async (ctx: Context, next: Next) => {
  if (!ctx.auth) {
    ctx.response.status = 401
    return
  }
  next()
}

export default auth
