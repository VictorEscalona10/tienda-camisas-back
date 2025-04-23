import prisma from "../config/db.js";
import createJWT from "../services/jwtService.js";
import {hashPassword, comparePassword} from "../services/passwordService.js";
import config from "../config/config.js";

export const register = async (req, res) => {
    const {name, email, password, repeatPassword} = req.body

    try {
        const findUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if (findUser){
            return res.status(409).json({
                error: true, 
                message: "usuario ya registrado"
            })
        }

        if (password !== repeatPassword){
            return res.status(400).json({
                error: true, 
                message: "Las contraseñas no coinciden"
            })
        }

        const hashedPassword = await hashPassword(password)

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        const {password: _, ...user} = newUser

        return res.status(201).json({
            error: false, 
            message: "Usuario registrado correctamente", 
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Error interno en el servidor, intentalo mas tarde"
        })
    }
}

export const login = async (req,res) => {
    const {email, password} = req.body

    try{
        const findUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!findUser){
            return res.status(401).json({
                error: true,
                message: "Credenciales invalidas"
            })
        }

        const passwordMatch = await comparePassword(password, findUser.password)

        if (!passwordMatch){
            return res.status(401).json({
                error: true,
                message: "Credenciales invalidas"
            })
        }

        const token = createJWT(findUser)

        res.cookie('authToken', token, {
            httpOnly: true,
            secure: config.NODE_ENV === 'production', // Requiere HTTPS en producción
            sameSite: config.NODE_ENV === 'production' ? 'strict' : 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
            path: '/', // Cookie disponible en toda la aplicación
            signed: true, 
            partitioned: true
        })

        const {password: _, ...user} = findUser

        return res.status(200).json({
            error: false,
            message: "Inicio de sesion exitoso",
            data: user
        })
    } catch(error){
        return res.status(500).json({
            error: error,
            message: "Error interno en el servidor, intentalo mas tarde"
        })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('authToken');
        return res.status(200).json({
            error: false,
            message: 'Sesión cerrada correctamente'
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Error interno en el servidor, intentalo mas tarde'
        });
    }
}