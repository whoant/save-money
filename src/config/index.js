require('dotenv').config();


module.exports = {
    PORT: process.env.PORT,
    DATABASE: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME
    },
    JWT: {
        token: process.env.JWT_TOKEN,
        expires: process.env.JWT_EXPIRES
    }
};