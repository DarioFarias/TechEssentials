import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Product extends Model{}

Product.init({
    idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        /* unique: true, */
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    price: {
        type: DataTypes.REAL,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    sequelize: dataBase,
    modelName: "product"
})

export default Product