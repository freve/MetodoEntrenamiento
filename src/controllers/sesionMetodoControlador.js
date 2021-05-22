import SesionMetodo from '../models/sesionMetodoModelo';

export async function obtenerAsignacion(req, res){

}

export async function listarPorMetodos(req, res){

}

export async function listarPorSesiones(req, res){

}

export async function crearAsignacion(req, res){
    const {sesionid, metodoid} = req.body;
    let fecha_creacion = new Date();
    try {
        let nuevo = SesionMetodo.create({
            sesionid,
            metodoid,
            fecha_creacion
        },{
            fields:['sesionid','metodoid','fecha_creacion']
        });
        if(nuevo){
            res.status(200).json({
                nuevo
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Lo sentimos ha ocurrido un error',
            data: {}
        });
    }
}

export async function listarAsignaciones(req, res){
    try {
        const todas = await SesionMetodo.findAll();
        if(todas){
            return res.status(200).json({
                todas
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Ha ocurrido ha ocurrido un error"
        });
    }
}