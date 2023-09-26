'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mascotas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mascotas.belongsTo(models.Clientes,{
        foreignKey:'id_cliente',
        as: 'cliente'
      })
    }
  }
  Mascotas.init({
    nombre: DataTypes.STRING,
    especie: DataTypes.STRING,
    id_cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mascotas',
  });
  return Mascotas;
};