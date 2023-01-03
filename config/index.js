import dotenv from 'dotenv';

dotenv.config();

export const {
    APP_PORT = 8000,
    DEBUG_MODE = true,
    APP_URL = `http://localhost:8000`,
    DB_URL = `mongodb+srv://proffessor:logan@cluster0.adfkkil.mongodb.net/foodmania`,
    authSource = `admin&w=1`,
    REFRESH_SECRET = `secrettoken`,
    JWT_SECRET = `thisappisawesome`,
    ON_HEROKU = false,
} = process.env;