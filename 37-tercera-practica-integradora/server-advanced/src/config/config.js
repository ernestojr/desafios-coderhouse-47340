export default {
  PORT: process.env.PORT || 8080,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce',
  TYPE_PERSISTENCE: process.env.TYPE_PERSISTENCE || 'memory',
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'gmail',
  EMAIL_PORT: process.env.EMAIL_PORT || 587,
}