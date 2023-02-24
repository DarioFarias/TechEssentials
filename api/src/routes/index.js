import { Router } from "express";
import categoryRoutes from "./categoryRoutes.js";
import productRoutes from "./productRoutes.js";
import userRoutes from "./userRoutes.js"
import cartRoutes from "./cartRoutes.js";


const routes = Router();

routes.use("/user", userRoutes);
routes.use("/product", productRoutes);
routes.use("/category", categoryRoutes);
routes.use("/cart", cartRoutes);

export default routes;