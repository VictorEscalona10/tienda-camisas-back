import { Router } from "express";
import { /* registerAdmin, */ loginAdmin, logoutAdmin } from "../controllers/authAdmin.controller.js";
import { registerValidations, loginValidations } from "../middlewares/validations/auth.validations.js";
import { validateFields } from "../middlewares/validation.middleware.js";

const router = Router();

//router.post('/register', registerValidations, validateFields, registerAdmin);
router.post('/login', loginValidations, validateFields, loginAdmin);
router.post('/logout', logoutAdmin);

export default router; 