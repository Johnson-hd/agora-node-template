import { Context, Next } from 'koa'

const log = async (ctx: Context, next: Next) => {
  console.log('==== pass log middleware ===')
  await next()
}

export default log
