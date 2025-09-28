import { Router } from "express";
import {getHealth, createProduct, getProductById, getProduct, updateProduct, deleteProduct, patchParcialUpdate} from "../controllers/product.controllers"
import { get } from "http";

const router = Router() 

router.get("/health", getHealth)
router.post("/", createProduct)
router.get("/:id", getProductById)
router.get("/", getProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)
router.patch("/:id", patchParcialUpdate)

export default router