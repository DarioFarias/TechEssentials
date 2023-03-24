import { Sequelize } from "sequelize";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

class CartController {
    static async createCart(req, res) {
        try {
            req.body.idUser = req.user.id;
            const results = await Cart.create(req.body);
            res.status(200).send({
                success: true,
                message: "Elemento del carrito creado con exito",
                results,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async getCartByUserId(req, res) {
        try {
            const results = await Cart.findAll({
                where: {
                    idUser: req.user.id,
                },
                attributes: ["id", "idProduct", "quantity"],
                /* include: [
                    {
                        model: Product,
                        attributes: [
                            "idCategory",
                            "name",
                            "description",
                            "price",
                            "stock",
                            "status",
                        ],
                    },
                ], */
            });
            if (results.length === 0) {
                res.status(204).send({
                    success: false,
                    message: "No hay productos para mostrar",
                });
            } else {
                res.status(200).send(results);
            }
        } catch (error) {
            res.status(400).send({ success: false, message: error.toString() });
        }
    }

    static async deleteCartById(req, res) {
        try {
            const RowsDeleted = await Cart.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (RowsDeleted === 0) {
                res.status(404).send({
                    success: false,
                    message: "No se encontró el producto.",
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: `Producto eliminado del carrito con exito.`,
                });
            }
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async updateCartById(req, res) {
        try {
            const { quantity } = req.body;

            const result = await Cart.update(
                { quantity },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );

            if (result[0] === 0) {
                throw "No se encontró el producto en el carrito";
            }

            res.status(200).send({
                success: true,
                message: "Producto actualizado correctamente",
                category: {
                    id: req.params.id,
                    quantity: quantity,
                },
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }
}

export default CartController;
