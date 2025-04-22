import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const verifyTokenJWT = (req, res, next) => {
    const token = req.cookies['authToken'];

    if (!token) {
        return res.status(401).json(
            { 
                error: true,
                message: 'Token inválido o expirado' 
            }
        );
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json(
            { 
                error: true,
                message: 'Token inválido o expirado' 
            }
        );
    }
};

export default verifyTokenJWT;
