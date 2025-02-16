import { Router } from 'express';
import { getProducts, createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/productController';

const router = Router();

//Rutas
/*
Las rutas gestionadas por la api
*/

router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


export default router;