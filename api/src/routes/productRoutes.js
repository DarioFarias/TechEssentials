import express from "express";
import ProductController from "../controllers/ProductController.js";
import authMe from "../midleware/authMe.js";
import isAdmin from "../midleware/isAdmin.js";


const productRoutes = express.Router();

productRoutes.get("/", ProductController.getAllProducts);

productRoutes.get("/searchbycategory/:id", ProductController.getProductsByCategoryId);

productRoutes.get("/:id", ProductController.getProductById);

productRoutes.use(authMe)

productRoutes.use(isAdmin)

productRoutes.post("/", ProductController.createProduct);

productRoutes.put("/:id", ProductController.updateProductById);

productRoutes.delete("/:id", ProductController.deleteProductById);

export default productRoutes;