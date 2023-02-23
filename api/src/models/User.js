import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class User extends Model{}

User.init({
    name: {
        type: DataTypes.STRING(50),
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
    }
}, {
    sequelize: dataBase,
    modelName: "user"
})

export default User