import Product from "../models/Product.js";
import { Sequelize, Op } from "sequelize";

const checkProductStock = async (req, res, next) => {
    try {
        const IdsArray = req.body.map((cartProduct) => cartProduct.id);
        const products = await Product.findAll({
            where: { id: { [Op.in]: IdsArray } },
        });

        const productsWithLowStock = [];

        for (let i = 0; i < req.body.length; i++) {
            const cartProduct = req.body[i];
            const product = products[i];
            if (product && product.stock < cartProduct.quantity) {
                productsWithLowStock.push(product);
            }
        }
        if (productsWithLowStock.length > 0) {
            //SI HAY PRODUCTOS CON PROBLEMAS DE STOCK SE RESPONDE 
            //CON UN ARREGLO DE TODOS LOS PRODUCTOS CON PROBLEMAS
            res.status(400).send(productsWithLowStock);
        } else {
            next();
        }
    } catch (error) {
        res.status(500).send({ success: false, message: error });
    }
};

export default checkProductStock;
