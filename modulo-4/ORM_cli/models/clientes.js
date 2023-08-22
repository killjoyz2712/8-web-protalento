'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  
  }
  Clientes.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};