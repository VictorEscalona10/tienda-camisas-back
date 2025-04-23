import { validationResult } from 'express-validator';

export const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Tomamos solo el primer error
        const firstError = errors.array()[0];
        return res.status(400).json({
            ok: false,
            error: {
                field: firstError.path,
                message: firstError.msg
            }
        });
    }
    next();
}; 