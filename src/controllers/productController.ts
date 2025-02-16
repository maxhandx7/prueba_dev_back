import { Request, Response } from 'express';
import Product from '../models/Product'


//Controlador
/*
Aqui se gestiona las solicitudes de la app
*/
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll();
        if (products) {
            res.json(products);
        } else {
            res.status(404).json({ error: 'No se encontraron productos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};
export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price } = req.body;
        const newProduct = await Product.create({ name, description, price });
        res.status(201).json({ message: 'Producto creado', newProduct });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear producto' });
    }
}
export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({
            where: { id }
        });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'No se encontro el producto' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al encontrar producto' });
    }
}
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const updProduct = await Product.findOne({
            where: { id }
        });

        if (updProduct) {
            updProduct.name = name;
            updProduct.description = description;
            updProduct.price = price;
            await updProduct.save();
            res.status(201).json({ message: 'Producto actuaizado', updProduct });
        } else {
            res.status(404).json({ error: 'No se encontro el producto' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
}
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({
            where: { id },
        });
        if (product) {
            await Product.destroy({ where: { id } });
            res.status(201).json({ message: 'Producto eliminado', product });
        } else {
            res.status(404).json({ error: 'No se encontro el producto' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
}