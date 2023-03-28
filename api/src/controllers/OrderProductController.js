import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
import OrderProduct from "../models/OrderProduct.js";

class OrderProductController {
    static async bulkCreateOrderProducts(req, res) {
        try {
            let totalProducts = 0;
            for (let i = 0; i < req.body?.length; i++) {
                const product = req.body?.[i];
                totalProducts += product.price * product.quantity;
            }
            const reqOrder = { total: totalProducts, status: "pending", idUser:req.body[0].idUser };            
            const order = await Order.create(reqOrder)
            req.body.forEach((orderProduct) => {
                orderProduct.idOrder = order.id;
                delete orderProduct.id;
            });
            const RowsDeleted = await Cart.destroy({
                where: {
                    idUser: req.user.id,
                },
            })
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
