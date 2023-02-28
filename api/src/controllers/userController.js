import User from "../models/User.js";

class UserController {
  static async getAllUsers(req, res) {
    await User.findAll({
      attributes: ["Id", "name", "lastName", "email", "tel", "role"],
    })
      .then((results) => {
        if (results.length === 0) throw "No hay usuarios para mostrar";
        res
          .status(200)
          .send({ success: true, message: "Usuarios encontrados", results });
      })
      .catch((error) => {
        res
          .status(400)
          .send({ success: false, message: error.errors[0].message });
      });
  }

  static async createUser(req, res) {
    try {
      const results = await User.create(req.body);
      res.status(200).send({
        success: true,
        message: "Usuario creado con exito",
        /* results, */
      });
    } catch (error) {
      res
        .status(400)
        .send({ success: false, message: error.errors[0].message });
    }
  }

  static async getUserById(req, res) {
    try {
      const results = await User.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["Id", "name", "lastName", "email", "tel", "role"],
      });
      if (!results) throw "No se encontro el usuario";
      res
        .status(200)
        .send({ success: true, message: "Usuario encontrado", results });
    } catch (error) {
      res
        .status(400)
        .send({ success: false, message: error.errors[0].message });
    }
  }

  static async deleteUserById(req, res) {
    try {
      const RowsDeleted = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (RowsDeleted === 0) {
        res.status(404).send({
          success: false,
          message: "No se encontró el usuario",
        });
      } else {
        res.status(200).send({
          success: true,
          message: `Usuario eliminado.`,
        });
      }
    } catch (error) {
      res
        .status(400)
        .send({ success: false, message: error.errors[0].message });
    }
  }

  static async updateUserById(req, res) {
    try {
      const result = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      if (result[0] === 0) {
        throw "No se encontró el usuario";
      }

      res.status(200).send({
        success: true,
        message: "Usuario actualizado correctamente",
        /* changes: req.body, */
      });
    } catch (error) {
      res
        .status(400)
        .send({ success: false, message: error.errors[0].message });
    }
  }

  static async logIn(req, res) {
    try {
      const { email, password } = req.body;
      const results = await User.findOne({
        where: {
          email,
        },
      });
      if (!results) throw "Usuario no existe";
      if (!(await results.validatePassword(password)))
        throw "Contraseña incorrecta";
      res.status(200).send({ success: true, message: "Usuario logeado" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
}

export default UserController;
