import { Router } from "express";
import categoryRoutes from "./categoryRoutes.js";
import productRoutes from "./productRoutes.js";
import userRoutes from "./userRoutes.js";
import cartRoutes from "./cartRoutes.js";
import adressRoutes from "./adressRoutes.js";
import cardRoutes from "./cardRoutes.js";
import orderRoutes from "./orderRoutes.js";
import orderProductRoutes from "./orderProductRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/product", productRoutes);
routes.use("/category", categoryRoutes);
routes.use("/cart", cartRoutes);
routes.use("/adress", adressRoutes);
routes.use("/card", cardRoutes);
routes.use("/order", orderRoutes);
routes.use("/orderProducts", orderProductRoutes)

export default routes;
