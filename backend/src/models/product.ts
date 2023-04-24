import sequelize from "../db/connection";
import DataTypes from 'sequelize';

export const Product = sequelize.define('product',{
    id:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:
    {
        type: DataTypes.STRING
    },
    description:
    {
        type: DataTypes.STRING
    },
    model:
    {
        type: DataTypes.STRING
    },
    color:
    {
        type: DataTypes.STRING
    },
    price:
    {
        type: DataTypes.INTEGER
    },
    category:
    {
        type: DataTypes.STRING
    },
    serial:
    {
        type: DataTypes.STRING
    }
})