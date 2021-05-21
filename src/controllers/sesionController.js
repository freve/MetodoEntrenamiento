
import Sesion from '../models/sesionModelo';

export async function obtenerSesiones(req, res){
    try {
        const sesiones = await Sesion.findAll();
        if(sesiones){
            return res.json({
                sesiones
            });
        }else{
            return res.json({
                message: "Lo sentimos no hay sesiones"
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Lo sentimos ha ocurrido un error"
        });
    }
}

export async function obtenerSesion(req, res){
    const {id} = req.params;
    try {
        const sesion = await Sesion.findOne({
            where: id
        }
        );
        let error = `lo sentimos no existe una sesion con el id: ${id}`;
        if(sesion){
            return res.json({
                sesion: sesion
            });
        }else{ // TODO:reemplazar este else en todos los servicios por que si no encuentra el elemento salta al catch
            return res.json({
                message: error
            });
        }
    } catch (error) {
        let errorM = `lo sentimos no existe una sesion con el id: ${id}`;
        res.status(500).json({
           error: error
        });
    }
}

export async function crearSesion(req, res){
    try {
        const {id,nombre,descripcion,tipo_sesion,microciclo} = req.body
        let nuevo =  await Sesion.create(
            id,
            nombre, 
            descripcion,
            tipo_sesion,
            microciclo
        )
        if(nuevo){
            return res.json({
                nuevo
            });
        }else{
            return res.json({
                mensaje: "No se pudo crear la sesion"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Ha ocurrido un error"
        });
    }
}

export async function eliminarSesion(req, res){
    try {
        const {id} = req.params;
        const filaEliminada = await Sesion.destroy({
            where:{
                id
            }
        });
        if(filaEliminada > 0){
            let mensaje = `se ha eliminado el elemento con id: ${id}`;
            return res.json({
                message: mensaje
            })
        }else{
            let mensaje = `no se ha eliminado el elemento con id: ${id}`;
            return res.json({
                message: mensaje
            })
        }
    } catch (error) {
        res.status(500).json({
            error: "Se ha producido un error"
        });
    }
}

export async function obtenerSesionPorNombre(req, res){
    try {
        const {nombre} = req.params;
        const sesion = await Sesion.findOne({
            where:{
                nombre
            }
        });
        if(sesion){
            return res.json({
                sesion
            });
        }else{
            let mensaje = `No existe una sesion con nombre ${nombre}`;
            return res.json({
                message: mensaje
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "lo siento ha ocurrido un error"
        });
    }
}