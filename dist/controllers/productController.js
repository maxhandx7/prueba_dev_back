"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.createProduct = exports.getProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.findAll();
        if (products) {
            res.json(products);
        }
        else {
            res.status(404).json({ error: 'No se encontraron productos' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});
exports.getProducts = getProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price } = req.body;
        const newProduct = yield Product_1.default.create({ name, description, price });
        res.status(201).json({ message: 'Producto creado', newProduct });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear producto' });
    }
});
exports.createProduct = createProduct;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield Product_1.default.findOne({
            where: { id }
        });
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ error: 'No se encontro el producto' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al encontrar producto' });
    }
});
exports.getProduct = getProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const updProduct = yield Product_1.default.findOne({
            where: { id }
        });
        if (updProduct) {
            updProduct.name = name;
            updProduct.description = description;
            updProduct.price = price;
            yield updProduct.save();
            res.status(201).json({ message: 'Producto actuaizado', updProduct });
        }
        else {
            res.status(404).json({ error: 'No se encontro el producto' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield Product_1.default.findOne({
            where: { id },
        });
        if (product) {
            yield Product_1.default.destroy({ where: { id } });
            res.status(201).json({ message: 'Producto eliminado', product });
        }
        else {
            res.status(404).json({ error: 'No se encontro el producto' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
});
exports.deleteProduct = deleteProduct;
