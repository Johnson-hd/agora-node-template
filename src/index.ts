import Koa, { Context, Next } from 'koa'
import KoaBodyParser from 'koa-bodyparser'
import path from 'path'
import { bootstrap, router } from 'agora-koa-decorator'

import { initDB } from './db'
// import { sendEnterpriseWxMsgByRobot } from './utils/notice'

const port = 8083 || process.env.PORT
const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const initApp = async () => {
  await initDB()

  const app = new Koa()

  bootstrap(path.resolve(__dirname, 'modules'), isDev ? '.ts' : '.js')

  app
    .use(async (ctx: Context, next: Next) => {
      try {
        await next()
      } catch (e) {
        ctx.status = e.status || 500
        ctx.body = e.message
        // @todo send the error
        // await sendEnterpriseWxMsgByRobot(e)
        ctx.app.emit('error', e, ctx)
      }
    })
    .use(KoaBodyParser())
    .use(router.routes())

  app.on('error', (err, ctx) => {
    console.error(
      `[Completed] ${ctx.status} "${ctx.request.method} ${ctx.request.url} ${ctx.request.hostname} ${err.message}`,
    )
  })

  app.listen(port, () => {
    console.info(`Service is listening on http://127.0.0.1:${port}`)
  })
}

initApp()
