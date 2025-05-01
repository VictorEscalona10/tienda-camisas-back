import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const verifyTokenJWTAdmin = (req, res, next) => {
    const token = req.signedCookies['adminToken'];

    if (!token) {
        return res.status(401).json(
            { 
                error: 'error amigo',
                message: 'Token inválido o expirado' 
            }
        );
    }

    // tengo conflictos con el token admin, arreglalo victor del futuro

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET_ADMIN);
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

export default verifyTokenJWTAdmin;
