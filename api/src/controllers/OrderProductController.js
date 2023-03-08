import OrderProduct from "../models/OrderProduct.js";

class OrderProductController {
    // ANTES DE REALIZAR EL CREATE EL MIDDLEWARE checkProductStock DEBE COMPROBAR QUE TODOS LOS PRODUCTOS CUENTAN CON EL STOCK
    // ANTES DE REALIZAR EL CREATE CON UN BEFORE CREATE SE DEBE CREAR LA ORDEN EN LA TABLA ORDER, PARA ESO SE DEBE USAR REQ.PRODUCTS PARA CREAR EL OBJETO CON EL TOTAL DE TODO EL PEDIDO
    static async bulkCreateOrderProducts(req, res) {
        try {
            const results = await OrderProduct.bulkCreate(req.body);
            res.status(200).send({
                success: true,
                results,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
        // DESPUES DE REALIZAR EL CREATE SE DEBE RESTAR DE PRODUCTS EL STOCK DE CADA PRODUCTO CON UN AFTER CREATE
    }

    static async getOrderProductsByOrderId(req, res) {
        try {
            const results = await OrderProduct.findAll({
                where: {
                    idOrder: req.params.id,
                },
                attributes: ["idProduct", "quantity", "price"],
            });
            if (results == 0) throw "No se encontraron elementos en la orden";
            res.status(200).send({
                success: true,
                message: "Productos encontrados",
                results,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    /*     static async deleteOrderProductById(req, res) {
        try {
            const RowsDeleted = await OrderProduct.destroy({
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
    } */

    /*     static async updateOrderProductById(req, res) {
        try {
            const { quantity } = req.body;

            const result = await OrderProduct.update(
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
    } */
}

export default OrderProductController;
