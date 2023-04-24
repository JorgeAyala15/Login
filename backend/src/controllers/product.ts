import { Request, Response } from "express";
import { Product } from "../models/product";

export const getProducts = async (req: Request, res: Response) =>{
    const listProduct = await Product.findAll();
    try {
        res.json(listProduct)
    } catch (error:any) {
        throw new Error(error);
    }
}
export const getProduct = (req: Request, res: Response) =>{
    
}
export const postProducts = (req: Request, res: Response) =>{
    
}
export const putProducts = (req: Request, res: Response) =>{
    
}
export const deleteProducts = (req: Request, res: Response) =>{
    
}