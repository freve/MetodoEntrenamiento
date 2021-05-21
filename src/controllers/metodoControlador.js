import Metodo from '../models/metodoModelo'

export async function obtenerMetodos(req, res){
   try{
        const listaMetodos = await Metodo.findAll();
        return res.json({
            metodos: listaMetodos
        })
   }catch(error){
       res.status(500).json({
        message: "Lo sentimos ha ocurrido un error",
        data: {}
    });
   }
}

export async function crearMetodo(req, res){
  const {nombre, descripcion, carga, intensidad, 
   duracion, privado } = req.body;
   console.log(req.body)
   try{
    let nuevo =  await Metodo.create({
        nombre,   
        descripcion, 
        carga,
        intensidad, 
        duracion,
        privado
    },{
        fields: ['nombre','descripcion','carga','intensidad','duracion','privado']
    });
    if(nuevo){
      return res.json({
            message: 'Se ha creado correctamente',
            data: nuevo
        });
    }
   }
   catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Lo sentimos ha ocurrido un error',
            data: {}
        });
    }
}

export async function obtenerMetodo(req, res){
    try {
        const {id} = req.params;
        const metodo = await Metodo.findOne({
            where:{
                id: id
            }
        });
        if(metodo){
            return res.json({
                metodo: metodo
            })
        }
        else{
            return res.json({
                error: "lo sentimos ese metodo no existe"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error"
        })
    }
}

export async function obtenerMetodoPorNombre(req, res){
    try {
        const {nombre} = req.params;
        const metodo = await Metodo.findOne({
            where:{
                nombre
            }
        });
        if(metodo){
            return res.json({
                metodo: metodo
            })
        }else{
            return res.json({
                metodo: "No existe ningun metodo con ese nombre"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error"
        })
    }

}

export async function eliminarMetodo(req, res){
    try {
        const {id} = req.params;
        const filaEliminada = await Metodo.destroy({
            where: {
                id
            }
            
        });
        if(filaEliminada > 0){
            let mensaje = `se ha eliminado el elemento con id: ${id}`;
            return res.json({
                message: mensaje
            })
        }else{
            let errorMensaje = `No existe el elemento con id: ${id}`;
            return res.json({
                message: errorMensaje
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error"
        })
    }

}