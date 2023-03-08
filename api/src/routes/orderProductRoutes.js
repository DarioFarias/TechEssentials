import express from "express";
import OrderProductController from "../controllers/OrderProductController.js";
import authMe from "../midleware/authMe.js"
import checkProductStock from "../midleware/checkProductStock.js";


const orderProductRoutes = express.Router();

orderProductRoutes.use(authMe);

orderProductRoutes.post("/", checkProductStock, OrderProductController.bulkCreateOrderProducts);

orderProductRoutes.get("/:id", OrderProductController.getOrderProductsByOrderId);

export default orderProductRoutes;