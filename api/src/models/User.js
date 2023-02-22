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
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    role: {
        type: DataTypes.STRING(25)
    }
}, {
    sequelize: dataBase,
    modelName: "User"
})

export default User