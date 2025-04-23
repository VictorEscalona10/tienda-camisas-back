import { configDotenv } from "dotenv";

configDotenv()

const config = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    SALT: process.env.SALT,
    NODE_ENV: process.env.NODE_ENV,
    COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
    COOKIE_SECRET: process.env.COOKIE_SECRET
}

export default config