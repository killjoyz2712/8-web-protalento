const {Sequelize} = require('sequelize');

const conexion = new Sequelize(
    'devf', //Nombre de la base
    'postgres', //Usuario
    '1234', // Password
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = conexion;