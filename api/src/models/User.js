import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";
import bcrypt from "bcrypt";

class User extends Model {
  async validatePassword(password) {
    const hash = await bcrypt.hash(password, this.salt); 
    return hash === this.password;
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: dataBase,
    modelName: "user",
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.salt = salt;

  const hash = await bcrypt.hash(user.password, user.salt);
  user.password = hash;
});

export default User;
