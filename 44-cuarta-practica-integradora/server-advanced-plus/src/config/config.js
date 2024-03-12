export default {
  port: process.env.PORT || 8080,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce',
  persistenceType: process.env.PERSISTENCE_TYPE || 'memory',
  jwtSecret: process.env.JWT_SECRET || 'shhhhh',
  loggerLevel: process.env.LOGGER_LEVEL || 'info',
  loggerFilePath: process.env.LOGGER_FILE_PATH || './logs/combined.log',
}