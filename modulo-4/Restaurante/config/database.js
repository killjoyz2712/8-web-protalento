import {Sequelize} from 'sequelize';

const conexion = new Sequelize(
    'restaurante', //Nombre de la base
    'postgres', //Usuario
    '1234', // Password
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

export default conexion;