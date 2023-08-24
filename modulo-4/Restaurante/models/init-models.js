import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _cocineros from  "./cocineros.js";
import _empleados from  "./empleados.js";
import _meseros from  "./meseros.js";

export default function initModels(sequelize) {
  const cocineros = _cocineros.init(sequelize, DataTypes);
  const empleados = _empleados.init(sequelize, DataTypes);
  const meseros = _meseros.init(sequelize, DataTypes);

  meseros.belongsTo(cocineros, { as: "cocinero", foreignKey: "cocinero_id"});
  cocineros.hasMany(meseros, { as: "meseros", foreignKey: "cocinero_id"});
  cocineros.belongsTo(empleados, { as: "empleado", foreignKey: "empleado_id"});
  empleados.hasMany(cocineros, { as: "cocineros", foreignKey: "empleado_id"});
  meseros.belongsTo(empleados, { as: "empleado", foreignKey: "empleado_id"});
  empleados.hasMany(meseros, { as: "meseros", foreignKey: "empleado_id"});

  return {
    cocineros,
    empleados,
    meseros,
  };
}
