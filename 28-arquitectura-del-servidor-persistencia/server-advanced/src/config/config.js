export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  mongodbUri: process.env.MONGODB_URI,
  persistence: process.env.PERSISTENCE || 'memory',
}