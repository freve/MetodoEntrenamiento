import Sequelize from 'sequelize';
import conexion from '../utils/conexion';
import Archivo from './archivoModelo';
import SesionMetodo from './sesionMetodoModelo';

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

/**
 * Creación de relación 1 a muchos desde metodo a archivo
 * referecia foranea campo metodo en la tabla archvo
 */
Metodo.hasMany(Archivo,{foreignKey: 'metodoid', sourceKey: 'id'});
Archivo.belongsTo(Metodo,{foreignKey: 'metodoid', sourceKey: 'id'});

/**
 * Creación de relación 1 a muchos desde metodo a sesion_metodo
 * referecia foranea campo metodo en la tabla sesion_metodo
 */

Metodo.hasMany(SesionMetodo,{foreignKey: 'metodoid', sourceKey: 'id'});
SesionMetodo.belongsTo(SesionMetodo,{foreignKey:'metodoid', sourceKey:'id'});

export default Metodo;