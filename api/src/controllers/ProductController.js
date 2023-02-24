import Product from "../models/Product.js";

class ProductController {
  static async getAllProducts(req, res) {
    await Product.findAll({ attributes: ["id", "idCategory", "name", "description", "price", "stock"] })
      .then((results) => {
        if (results.length === 0) throw "No hay productos para mostrar";
        res
          .status(200)
          .send({ success: true, message: "Productos encontrados", results });
      })
      .catch((error) => {
        res.status(400).send({ success: false, message: error });
      });
  }

  static async createProduct(req, res) {
    try {
      const results = await Product.create(req.body);
      res
        .status(200)
        .send({
          success: true,
          message: "Producto creado con exito",
          results,
        });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  static async getProductById(req, res) {
    try {
      const results = await Product.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["id", "idCategory", "name", "description", "price", "stock"],
      });
      if (!results) throw "No se encontro el producto";
      res
        .status(200)
        .send({ success: true, message: "Producto encontrado", results });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  static async getProductsByCategoryId(req, res) {
    try {
      const results = await Product.findAll({
        where: {
          idCategory: req.params.id,
        },
        attributes: ["id", "idCategory", "name", "description", "price", "stock"],
      });
      if (results==0) throw "No se encontraron productos";
      res
        .status(200)
        .send({ success: true, message: "Productos encontrados", results });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  static async deleteProductById(req, res) {
    try {
      const RowsDeleted = await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (RowsDeleted === 0) {
        res.status(404).send({
          success: false,
          message: "No se encontró el producto",
        });
      } else {
        res.status(200).send({
          success: true,
          message: `Producto eliminado.`,
        });
      }
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
}

static async updateProductById(req, res) {
    try {
  
      const result = await Product.update( req.body , {
        where: {
          id: req.params.id,
        },
      });
  
      if (result[0] === 0) {
        throw "No se encontró el producto";
      }
  
      res.status(200).send({
        success: true,
        message: "Producto actualizado correctamente",
        category: req.body
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  }



export default ProductController;