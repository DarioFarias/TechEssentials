import express from "express";
import AdressController from "../controllers/AdressController.js";
import authMe from "../midleware/authMe.js"

const adressRoutes = express.Router();

adressRoutes.use(authMe);

adressRoutes.post("/", AdressController.createAdress);

adressRoutes.get("/", AdressController.getAdressesByUserId);

adressRoutes.put("/:id", AdressController.updateAdressById);

adressRoutes.delete("/:id", AdressController.deleteAdressById);

export default adressRoutes;