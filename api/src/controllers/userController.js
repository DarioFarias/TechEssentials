import User from "../models/User.js";
import { generateToken, verify } from "../config/token.js";

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
        res.status(400).send({ success: false, message: error });
      });
  }

  static async createUser(req, res) {
    try {
      req.body.status = "on";
      const results = await User.create(req.body);
      res.status(200).send({
        success: true,
        message: "Usuario creado con exito",
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
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
      res.status(400).send({ success: false, message: error });
    }
  }

  static async deleteUserById(req, res) {
    try {
      const results = await User.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["status"],
      });
      if (!results || results.status === "off")
        throw "No se encontro el usuario";
      try {
        req.body.status = "off";
        const result = await User.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        res.status(200).send({
          success: true,
          message: "Baja del usuario exitosa",
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error });
      }
    } catch (error) {
      res.status(400).send({ success: false, message: error });
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
      res.status(400).send({ success: false, message: error });
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
      const payload = {
        email: results.email,
        role: results.role,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.status(200).send({ success: true, message: "Usuario logeado" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  static async me(req, res) {
    res
      .status(200)
      .send({ success: true, message: "Usuario logueado", result: req.user });
  }

  static async logOut(req, res) {
    res.clearCookie("token");
    res.send(204);
  }
}

export default UserController;
