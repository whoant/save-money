require('dotenv').config();


module.exports = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT: {
        token: process.env.JWT_TOKEN,
        expires: process.env.JWT_EXPIRES
    }
};