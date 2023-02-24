import express from "express";

const productRoutes = express.Router();

productRoutes.get("/", (req, res) => {
  res.send("Obtener todos los productos");
});

productRoutes.post("/", (req, res) => {
  res.send("Crear producto");
});

productRoutes.get("/:id", (req, res) => {
  res.send("Buscar producto por su id");
});

productRoutes.put("/:id", (req, res) => {
  res.send("Actualizar producto por su id");
});

productRoutes.delete("/:id", (req, res) => {
  res.send("Borrar producto por su id");
});

export default productRoutes;