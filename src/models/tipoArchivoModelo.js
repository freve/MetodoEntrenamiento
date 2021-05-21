import Sequelize from 'sequelize';
import conexion from '../utils/conexion';
import Archivo from './archivoModelo'

const TipoArchivo = conexion.define('tipoArchivo',{
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
        type: Sequelize.STRING,
    }
},{
    timestamps: false,
    tableName: 'tipo_archivo'
});

/**
 * Creación de relación 1 a muchos desde tipo_archivo a archivo
 * referecia foranea campo tipo en la tabla archvo
 */
TipoArchivo.hasMany(Archivo,{foreignKey: 'tipo', sourceKey: 'id'});
Archivo.belongsTo(Archivo,{foreignKey:'tipo', sourceKey:'id'});

export default TipoArchivo;