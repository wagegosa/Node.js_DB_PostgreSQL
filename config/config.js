const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || '3000',
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbname: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
}

module.exports = { config };