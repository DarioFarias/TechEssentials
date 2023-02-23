import { DataTypes, Model } from "sequelize";
import dataBase from "../config/dataBase.js";

class Category extends Model{}

Category.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: true,
    }
}, {
    sequelize: dataBase,
    modelName: "category"
})

export default Category