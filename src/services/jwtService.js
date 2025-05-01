import jwt from 'jsonwebtoken'
import config from '../config/config.js'

export const createJWT = (user) => {
    const tokenJWT = jwt.sign({id: user.id}, config.JWT_SECRET, {expiresIn: '7d'})
    return tokenJWT
}

export const createJWTAdmin = (admin)=> {
    const tokenJWT = jwt.sign({id: admin.id, role: 'admin'}, config.JWT_SECRET_ADMIN, {expiresIn: '7d'})
    return tokenJWT
}



