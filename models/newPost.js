const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NewPost extends Model {}

Dashboard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    newTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'gallery',
  }
);

module.exports = NewPost;
