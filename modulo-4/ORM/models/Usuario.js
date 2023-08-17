const {DataTypes} = require("sequelize")
const conexion = require("../config/database");

const Usuario = conexion.define("Usuarios",{
    id_usuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true

    },
    nombre:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    telefono:{
        type: DataTypes.STRING(13),
        allowNull: false,
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    timestamps: false,
});

module.exports = Usuario;