import jwt from 'jsonwebtoken'
import config from '../config/config.js'

const createJWT = (user) => {
    const tokenJWT = jwt.sign({id: user.id}, config.JWT_SECRET, {expiresIn: '7d'})
    return tokenJWT
}

export default createJWT;

