import { Op } from "sequelize";
import Product from "../models/Product.js";
class ProductController {
    static async getAllProducts(req, res) {
        let query = {
            stock: { [Op.gt]: 0 },
            status: true,
        };
        try {
            const results = await Product.findAll({
                where: query,
                attributes: [
                    "id",
                    "idCategory",
                    "name",
                    "description",
                    "price",
                    "stock",
                ],
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
            res.status(400).send({ success: false, message: error });
        }
    }

    static async createProduct(req, res) {
        try {
            const results = await Product.create(req.body);
            res.status(200).send({
                success: true,
                message: "Producto creado con exito",
                results,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async getProductById(req, res) {
        try {
            const results = await Product.findOne({
                where: {
                    id: req.params.id,
                },
                attributes: [
                    "id",
                    "idCategory",
                    "name",
                    "description",
                    "price",
                    "stock",
                ],
            });
            if (!results) throw "No se encontro el producto";
            res.status(200).send({
                success: true,
                message: "Producto encontrado",
                results,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async getProductsByFilters(req, res) {
        try {
            const idCategory = req.params.id;
            const minPrice = req.params.minPrice;
            const maxPrice = req.params.maxPrice;
            const query =
                idCategory && !isNaN(idCategory)
                    ? { idCategory: idCategory }
                    : { idCategory: { [Op.ne]: null } };

            if (!isNaN(minPrice) && !isNaN(maxPrice)) {
                query.price = {
                    [Op.between]: [minPrice, maxPrice],
                };
            }

            query.stock = { [Op.gt]: 0 };
            query.status = true;

            const results = await Product.findAll({
                where: query,
                attributes: ["id", "name", "description", "price", "stock"],
            });
            if (results.length == 0) {
                res.status(204);
            }
            res.status(200).send(results);
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async getProductsByCategoryIdForAdmins(req, res) {
        try {
            const idCategory = req.params.id;

            const query =
                idCategory && !isNaN(idCategory)
                    ? { idCategory: idCategory }
                    : { idCategory: { [Op.ne]: null } };

            const results = await Product.findAll({
                where: query,
                attributes: ["id", "name", "description", "price", "stock"],
            });
            if (results.length == 0) {
                res.status(204);
            }
            res.status(200).send(results);
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async deleteProductById(req, res) {
        try {
            const RowsDeleted = await Product.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (RowsDeleted === 0) {
                res.status(404).send({
                    success: false,
                    message: "No se encontró el producto",
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: `Producto eliminado.`,
                });
            }
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async updateProductById(req, res) {
        try {
            const result = await Product.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });

            if (result[0] === 0) {
                throw "No se encontró el producto";
            }

            res.status(200).send({
                success: true,
                message: "Producto actualizado correctamente",
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }
}

export default ProductController;
