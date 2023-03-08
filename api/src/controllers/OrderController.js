import Order from "../models/Order.js";

class OrderController {
    static async createOrder(req, res) {
        try {
            req.body.idUser = req.user.id;
            const results = await Order.create(req.body);
            res.status(200).send({
                succes: true,
                results,
            });
        } catch (error) {
            res.status(400).send({ succes: false, message: error });
        }
    }

    static async getOrdersByUserId(req, res) {
        try {
            const results = await Order.findAll({
                where: {
                    idUser: req.params.id,
                },
                attributes: ["id", "total", "status", "createdAt"],
            });
            if (results == 0) throw "No existen tickets";
            res.status(200).send({
                succes: true,
                message: "Tickets encontrados",
                results,
            });
        } catch (error) {
            res.status(400).send({ succes: false, message: error });
        }
    }

    static async updateOrderStatusById(req, res) {
        try {
            const result = await Order.update(
                { status: req.body.status },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );

            if (result[0] === 0) {
                throw "No se encontró el ticket";
            }

            res.status(200).send({
                success: true,
                message: "Ticket actualizado correctamente",
            });
        } catch (error) {
            res.status(400).send({ succes: false, message: error });
        }
    }
}

export default OrderController;
