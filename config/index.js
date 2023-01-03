import dotenv from 'dotenv';

dotenv.config();

export const {
    APP_PORT,
    DEBUG_MODE,
    APP_URL,
    DB_URL,
    authSource,
    REFRESH_SECRET,
    JWT_SECRET,
    ON_HEROKU,
} = process.env;