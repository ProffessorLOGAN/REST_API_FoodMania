import dotenv from 'dotenv';

dotenv.config();

export const {
    APP_PORT,
    DEBUG_MODE,
    JWT_SECRET,
    APP_URL,
} = process.env;