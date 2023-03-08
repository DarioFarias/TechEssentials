import Adress from "../models/Adress.js";

class AdressController {
    static async createAdress(req, res) {
        try {
            req.body.idUser=req.user.id
            const results = await Adress.create(req.body);
            res.status(200).send({
                success: true,
                message: "Alta de domicilio exitosa",
                results,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async getAdressesByUserId(req, res) {
        try {
            const results = await Adress.findAll({
                where: {
                    idUser: req.user.id,
                },
                attributes: [
                    "id",
                    "street",
                    "number",
                    "intNumber",
                    "neighborhood",
                    "city",
                    "state",
                    "country",
                    "postalcode",
                ],
            });
            if (results == 0) throw "No existe domicilio";
            res.status(200).send({
                success: true,
                message: "Domicilios encontrados",
                results,
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async deleteAdressById(req, res) {
        try {
            const RowsDeleted = await Adress.destroy({
                where: {
                    id: req.params.id,
                },
            });
            if (RowsDeleted === 0) {
                res.status(404).send({
                    success: false,
                    message: "No existe domicilio",
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: `Domicilio eliminado`,
                });
            }
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }

    static async updateAdressById(req, res) {
        try {
            const result = await Adress.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });

            if (result[0] === 0) {
                throw "No existe domicilio";
            }

            res.status(200).send({
                success: true,
                message: "Domicilio modificado exitosamente",
            });
        } catch (error) {
            res.status(400).send({ success: false, message: error });
        }
    }
}

export default AdressController;
