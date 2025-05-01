import prisma from "../config/db.js";
import {createJWTAdmin} from "../services/jwtService.js";
import {hashPassword, comparePassword} from "../services/passwordService.js";
import config from '../config/config.js';

export const registerAdmin = async (req, res) => {
    const {name, email, password, repeatPassword} = req.body;

    try {
        const findAdmin = await prisma.admin.findFirst({
            where: {
                email: email
            }
        });

        if (findAdmin) {
            return res.status(409).json({
                error: true,
                message: "Administrador ya registrado"
            });
        }

        if (password !== repeatPassword) {
            return res.status(400).json({
                error: true,
                message: "Las contraseñas no coinciden"
            });
        }

        const hashedPassword = await hashPassword(password);

        const newAdmin = await prisma.admin.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        const {password: _, ...admin} = newAdmin;

        return res.status(201).json({
            error: false,
            message: "Administrador registrado correctamente",
            data: admin
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Error interno en el servidor, intentalo mas tarde"
        });
    }
};

export const loginAdmin = async (req, res) => {
    const {email, password} = req.body;

    try {
        const findAdmin = await prisma.admin.findUnique({
            where: {
                email
            }
        });

        if (!findAdmin) {
            return res.status(401).json({
                error: true,
                message: "Credenciales inválidas"
            });
        }

        const passwordMatch = await comparePassword(password, findAdmin.password);

        if (!passwordMatch) {
            return res.status(401).json({
                error: true,
                message: "Credenciales inválidas"
            });
        }

        const token = createJWTAdmin(findAdmin);

        res.cookie('adminToken', token, {
            httpOnly: true,
            secure: config.NODE_ENV === 'production',
            sameSite: config.NODE_ENV === 'production' ? 'strict' : 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
            path: '/',
            signed: true,
            partitioned: true
        });

        const {password: _, ...admin} = findAdmin;

        return res.status(200).json({
            error: false,
            message: "Inicio de sesión exitoso",
            data: admin
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Error interno en el servidor, intentalo mas tarde"
        });
    }
};

export const logoutAdmin = async (req, res) => {
    try {
        res.clearCookie('adminToken');
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
}; 