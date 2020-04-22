module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 9000,
  MONGODB_URI: `mongodb+srv://admin:${
    process.env.DB_ADMIN_PASSWORD
  }@moviequizcluster-qkbqt.mongodb.net/test?retryWrites=true&w=majority`,
}
