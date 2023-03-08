import OrderController from "../controllers/OrderController.js";
import authMe from "../midleware/authMe.js";
import express from "express"

const orderRoutes = express.Router();

orderRoutes.use(authMe);

orderRoutes.post("/", OrderController.createOrder);

orderRoutes.get("/:id", OrderController.getOrdersByUserId);

orderRoutes.put("/:id", OrderController.updateOrderStatusById);

export default orderRoutes;