import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import id from "zod/v4/locales/id.js";

export const createProduct = async (req : Request, res :Response) => {
    try {
        const {name, price, description, sku, stock} = req.body
        const product = await prisma.product.create({
            data: {name, price, description, sku, stock}
            
        })
        return res.json(product)
    } catch (error: any) {
        return res.status(500).json({error: "Internal Server Error"})
    }
}

export const getProduct = async (req : Request, res : Response ) => {
    const product = await prisma.product.findMany()
    return res.json(product)
}

export const deleteProduct = async (req : Request, res : Response) => {
    const{id} = req.params
    const product = await prisma.product.delete({
        where: {id: String(id)}
    })
}

export const updateProduct = async (req : Request, res: Response) => {
    try {
        const{id} = req.params
        const {name, price, description, sku, stock} = req.body
        const product = await prisma.product.update({
            where: {id: String(id)},
            data: {name, price, description, sku, stock}

        })
        return res. json(product)
        
    } catch (error: any) {
        return res.status(500).json({error: "Internal Server Error"})
    }
}