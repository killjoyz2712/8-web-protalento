import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class empleados extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_empleado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apellido_p: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    appellido_m: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cedula: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    salario: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    experencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empleados',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "empleados_pkey",
        unique: true,
        fields: [
          { name: "id_empleado" },
        ]
      },
    ]
  });
  }
}
