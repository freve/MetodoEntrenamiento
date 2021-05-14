import Sequelize from 'sequelize';
import conexion from '../utils/conexion';

const Sesion =  conexion.define('sesion',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        notNull: true
    },
    nombre: {
        type: Sequelize.STRING,
        notNull: true
    },
    descripcion: {
        type: Sequelize.STRING
    },
    tipo_sesion: {
        type: Sequelize.STRING,
        notNull: true
    },
    microciclo: {
        type: Sequelize.STRING,
        notNull: true
    }
});



export default Sesion;