import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Product extends Model{}

Product.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}, {
    sequelize: dataBase,
    modelName: "Product"
})

export default Product