import { Router } from "express";
import {getHealth, getProduct, createProduct, updateProduct, deleteProduct} from "../controllers/product.controllers"

const router = Router()

router.get("/health", getHealth)
router.get("/", getProduct)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router