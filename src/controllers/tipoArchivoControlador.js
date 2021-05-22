import TipoArchivo from '../models/tipoArchivoModelo';


export async function obtenerTiposDeArchivos(req, res){
    try {
        const tipos = await TipoArchivo.findAll();
        if(tipos){
            return res.status(200).json({
                tipos
            });
        }     
    } catch (error) {
        res.status(500).json({
            error: "Lo sentimos ha ocurrido un error"
        });
    }
}


export async function obtenerTipoDeArchivo(req, res){
    const {id} = req.params;
    try {
        const tipo = await TipoArchivo.findOne({
            where:  {
                id
            }
        });
        if(tipo){
            return res.status(200).json({
                tipo
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Ha ocurrido un error"
        });
    }
}

