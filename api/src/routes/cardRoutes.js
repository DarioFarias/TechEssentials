import express from "express";
import CardController from "../controllers/CardController.js";
import authMe from "../midleware/authMe.js"

const cardRoutes = express.Router();

cardRoutes.use(authMe);

cardRoutes.post("/", CardController.createCard);

cardRoutes.get("/", CardController.getCardsByUserId);

cardRoutes.put("/:id", CardController.updateCardById);

cardRoutes.delete("/:id", CardController.deleteCardById);

export default cardRoutes;