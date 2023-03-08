import Card from "../models/Card.js";

class CardController {
    static async createCard(req, res) {
        try {
            req.body.idUser=req.user.id
            const results = await Card.create(req.body);
            res.status(200).send({
                success: true,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async getCardsByUserId(req, res) {
        try {
            const results = await Card.findAll({
                where: {
                    idUser: req.user.id,
                },
                attributes: [
                    "id",
                    "cardNumber",
                    "expDate",
                    "cvv",
                ],
            });
            if (results == 0) throw "No existen tarjetas";
            res.status(200).send({
                success: true,
                results,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async deleteCardById(req, res) {
        try {
            const RowsDeleted = await Card.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (RowsDeleted === 0) {
                res.status(404).send({
                    success: false,
                    message: "No existe tarjeta",
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: `Tarjeta eliminada`,
                });
            }
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async updateCardById(req, res) {
        try {
            const result = await Card.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });

            if (result[0] === 0) {
                throw "No existe tarjeta";
            }

            res.status(200).send({
                success: true,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }
}

export default CardController