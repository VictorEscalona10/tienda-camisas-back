import { configDotenv } from "dotenv";

configDotenv()

const config = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    SALT: process.env.SALT,
}

export default config