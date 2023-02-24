import Category from "../models/Category.js";

class CategoryController {
  static async getAllCategories(req, res) {
    await Category.findAll({ attributes: ["Id", "name", "description"] })
      .then((results) => {
        if (results.length === 0) throw "No hay categorias para mostrar";
        res
          .status(200)
          .send({ success: true, message: "Categorias encontradas", results });
      })
      .catch((error) => {
        res.status(400).send({ success: false, message: error });
      });
  }

  static async createCategory(req, res) {
    try {
      const results = await Category.create(req.body);
      res
        .status(200)
        .send({
          success: true,
          message: "Categorias creada con exito",
          results,
        });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  static async getCategoryById(req, res) {
    try {
      const results = await Category.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["id", "name", "description"],
      });
      if (!results) throw "No se encontro la categoria";
      res
        .status(200)
        .send({ success: true, message: "Categoria encontrada", results });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  static async deleteCategoryById(req, res) {
    try {
      const RowsDeleted = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (RowsDeleted === 0) {
        res.status(404).send({
          success: false,
          message: "No se encontró la categoría.",
        });
      } else {
        res.status(200).send({
          success: true,
          message: `Categoría eliminada.`,
        });
      }
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
}

static async updateCategoryById(req, res) {
    try {
      const { name, description } = req.body;
  
      const result = await Category.update({ name, description }, {
        where: {
          id: req.params.id,
        },
      });
  
      if (result[0] === 0) {
        throw "No se encontró la categoría";
      }
  
      res.status(200).send({
        success: true,
        message: "Categoría actualizada correctamente",
        category: {
            id: req.params.id,
            name: name,
            description: description
          }
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  }



export default CategoryController;
