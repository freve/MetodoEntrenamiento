import Sequelize from 'sequelize';
import conexion from '../utils/conexion';

const Metodo = conexion.define('metodo',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    
    },
    nombre: {
        type: Sequelize.STRING,
        notNull: true
    },
    descripcion: {
        type: Sequelize.STRING
    },
    carga: {
        type: Sequelize.INTEGER,
        notNull: true
    },
    intensidad: {
        type: Sequelize.INTEGER,
        notNull: true
    },
    duracion: {
        type: Sequelize.INTEGER,
        notNull: true
    },
    privado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
},{
    timestamps: false
});

export default Metodo;