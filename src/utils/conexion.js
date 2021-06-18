import Sequelize from 'sequelize';

const conexion = new Sequelize('postgres://postgres:root@127.0.0.1:5444/metodos')


export default conexion;