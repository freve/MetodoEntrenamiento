import Sequelize from 'sequelize';
import conexion from '../utils/conexion';
import SesionMetodo from './sesionMetodoModelo';

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
},{
    timestamps: false,
    freezeTableName: true
});

/**
 * Creación de relación 1 a muchos desde sesion a sesion_metodo
 * referecia foranea campo sesion en la tabla sesion_metodo
 */

Sesion.hasMany(SesionMetodo,{foreignKey: 'sesionid', sourceKey: 'id'});
SesionMetodo.belongsTo(Sesion,{foreignKey: 'sesionid', sourceKey: 'id'});

export default Sesion;