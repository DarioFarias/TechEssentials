import express from "express";

const cartRoutes = express.Router();

cartRoutes.get("/", (req, res) => {
  res.send("Obtener todos los productos del carrito");
});

cartRoutes.post("/", (req, res) => {
  res.send("Nuevo producto en el carrito");
});

cartRoutes.get("/:id", (req, res) => {
  res.send("Buscar producto del carrito por su id");
});

cartRoutes.put("/:id", (req, res) => {
  res.send("Actualizar producto del carrito por su id");
});

cartRoutes.delete("/:id", (req, res) => {
  res.send("Borrar producto del carrito por su id");
});

export default cartRoutes;