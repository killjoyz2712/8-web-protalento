import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cocineros extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_cocinero: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    especialidad_preparacion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    certificado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    empleado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empleados',
        key: 'id_empleado'
      }
    }
  }, {
    sequelize,
    tableName: 'cocineros',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cocineros_pkey",
        unique: true,
        fields: [
          { name: "id_cocinero" },
        ]
      },
    ]
  });
  }
}
