import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class meseros extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_mesero: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    especialidad_cargo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    poliglota: {
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
    },
    cocinero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cocineros',
        key: 'id_cocinero'
      }
    }
  }, {
    sequelize,
    tableName: 'meseros',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "meseros_pkey",
        unique: true,
        fields: [
          { name: "id_mesero" },
        ]
      },
    ]
  });
  }
}
