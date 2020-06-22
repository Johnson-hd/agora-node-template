const env = process.env.NODE_ENV || 'development'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(`./${env}`).default

export default config
