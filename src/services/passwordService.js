import bcrypt from 'bcrypt'
import config from '../config/config.js'

export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, parseInt(config.SALT))
    return hashedPassword
}

export const comparePassword = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword)
    return match
}



