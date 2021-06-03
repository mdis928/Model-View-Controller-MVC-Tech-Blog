const { Model, DataTypes} = require('sequelize');
const sequelize = require = ('../config/connection');

class Dashboard extends Model {}

Dashboard.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

    }





)