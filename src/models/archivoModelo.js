import Sequelize from 'sequelize';
import conexion from '../utils/conexion';

const Archivo = conexion.define('archivo',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING,
        notNull: true,
        validate: {
            len: {
                args:[5,80],
                msg: "El nombre debe tener entre 5 y 80 caracteres"
            }
        }
    },
    ruta: {
        type: Sequelize.STRING,
        notNull: true
    },
    tipo: {
        type: Sequelize.INTEGER,
        notNull: true
    },
    metodoid: {
        type: Sequelize.INTEGER,
        notNull: true
    }
},{
    timestamps: false,
    freezeTableName: true
})



export default Archivo;