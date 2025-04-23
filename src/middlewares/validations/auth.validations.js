import { body } from 'express-validator';

export const registerValidations = [
    body('name')
        .notEmpty()
        .withMessage('El nombre es requerido')
        .isLength({ min: 4 })
        .withMessage('El nombre debe tener al menos 4 caracteres'),
    body('email')
        .notEmpty()
        .withMessage('El email es requerido')
        .isEmail()
        .withMessage('El email debe ser válido'),
    body('password')
        .notEmpty()
        .withMessage('La contraseña es requerida')
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres')
];

export const loginValidations = [
    body('email')
        .notEmpty()
        .withMessage('El email es requerido'),
    body('password')
        .notEmpty()
        .withMessage('La contraseña es requerida')
]; 