import OrderProduct from "../models/OrderProduct.js";

class OrderProductController {

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

}

export default OrderProductController;
