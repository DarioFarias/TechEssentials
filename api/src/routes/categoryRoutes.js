import express from "express";
import CategoryController from "../controllers/CategoryController.js"

const categoryRoutes = express.Router();

categoryRoutes.get("/", CategoryController.getAllCategories);

categoryRoutes.post("/", CategoryController.createCategory);

categoryRoutes.get("/:id", CategoryController.getCategoryById);

categoryRoutes.put("/:id", CategoryController.updateCategoryById);

categoryRoutes.delete("/:id", CategoryController.deleteCategoryById);

export default categoryRoutes;