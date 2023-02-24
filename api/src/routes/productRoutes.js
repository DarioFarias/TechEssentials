import express from "express";
import ProductController from "../controllers/ProductController.js";


const productRoutes = express.Router();

productRoutes.get("/", ProductController.getAllProducts);

productRoutes.get("/searchbycategory/:id", ProductController.getProductsByCategoryId);

productRoutes.get("/:id", ProductController.getProductById);

productRoutes.post("/", ProductController.createProduct);

productRoutes.put("/:id", ProductController.updateProductById);

productRoutes.delete("/:id", ProductController.deleteProductById);

export default productRoutes;