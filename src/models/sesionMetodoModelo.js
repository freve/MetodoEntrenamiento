import Sequelize from 'sequelize';
import conexion from '../utils/conexion';

const SesionMetodo = conexion.define('sesionMetodo',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    sesionid: {
        type: Sequelize.INTEGER,
        notNull: true
    },
    metodoid: {
        type: Sequelize.INTEGER,
        notNull: true
    },
    fecha_creacion:{
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW,
        field: 'fecha_creacion'
    }
},{
    timestamps: false,
    tableName: 'sesion_metodo'
})


export default SesionMetodo;