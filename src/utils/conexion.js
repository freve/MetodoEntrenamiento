import Sequelize from 'sequelize';

const conexion = new Sequelize('postgres://postgres:root@base:5432/metodos')


export default conexion;