import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Adress extends Model{}

Adress.init({
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    intNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    neighborhood: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: dataBase,
    modelName: "Adress"
})

export default Adress