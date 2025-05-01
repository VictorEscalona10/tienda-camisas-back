import { Router } from "express";
import { createProductType, deleteProductType, getProductType } from "../controllers/productType.controller.js";
import verifyTokenJWTAdmin from "../middlewares/verifyJWTAdmin.js";

const router = Router()

router.get('/', getProductType)
router.post('/', verifyTokenJWTAdmin, createProductType)
router.delete('/', verifyTokenJWTAdmin, deleteProductType)

export default router