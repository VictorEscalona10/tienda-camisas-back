import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import { registerValidations, loginValidations } from "../middlewares/validations/auth.validations.js";
import { validateFields } from "../middlewares/validation.middleware.js";

const router = Router()

router.post('/register', registerValidations, validateFields, register)
router.post('/login', loginValidations, validateFields, login)
router.post('/logout', logout)

export default router