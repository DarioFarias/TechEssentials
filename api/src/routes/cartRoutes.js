import express from "express";
import CartController from "../controllers/CartController.js";
import authMe from "../midleware/authMe.js"

const cartRoutes = express.Router();

cartRoutes.use(authMe);

cartRoutes.post("/", CartController.createCart);

cartRoutes.get("/", CartController.getCartByUserId);

cartRoutes.put("/:id", CartController.updateCartById);

cartRoutes.delete("/:id", CartController.deleteCartById);

export default cartRoutes;