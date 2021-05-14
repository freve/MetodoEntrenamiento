import Metodo from '../models/metodoModelo'

export function obtenerMetodos(req, res){
    res.send('retorna algo')
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

export function obtenerMetodo(req, res){

}