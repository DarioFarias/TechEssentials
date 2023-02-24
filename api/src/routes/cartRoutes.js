import express from "express";
import CartController from "../controllers/CartController.js";

const cartRoutes = express.Router();

cartRoutes.post("/", CartController.createCart);

cartRoutes.get("/:id", CartController.getCartByUserId);

cartRoutes.put("/:id", CartController.updateCartById);

cartRoutes.delete("/:id", CartController.deleteCartById);

export default cartRoutes;