import { body } from 'express-validator';

export const createCollectionValidations = [
    body('name')
        .notEmpty().withMessage('El nombre de la colección es requerido')
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')
        .matches(/^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]+$/).withMessage('El nombre solo puede contener letras, números y espacios')
];

