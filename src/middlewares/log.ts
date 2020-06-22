import { Context, Next } from 'koa'

const log = async (ctx: Context, next: Next) => {
  console.log('==== pass log middleware ===')
  next()
}

export default log
