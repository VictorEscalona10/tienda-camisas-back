import { Router } from "express";
import { createCollection, getCollections, deleteCollection } from "../controllers/collection.controller.js";
import { createCollectionValidations } from "../middlewares/validations/collection.validations.js";
import { validateFields } from "../middlewares/validation.middleware.js";
import verifyTokenJWTAdmin from "../middlewares/verifyJWTAdmin.js";

const router = Router()

router.get('/', getCollections)
router.post('/', verifyTokenJWTAdmin, createCollectionValidations, validateFields, createCollection)
router.delete('/', verifyTokenJWTAdmin, deleteCollection)

export default router
