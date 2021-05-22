import { Router } from 'express';
//import {obtenerSesion,obtenerSesiones,crearSesion,eliminarSesion,obtenerSesionPorNombre} from '../controllers/sesionController';
import * as controlador from '../controllers/sesionControlador';


const router = Router();

router.get('/',controlador.obtenerSesiones);
router.post('/',controlador.crearSesion);
router.get('/:id',controlador.obtenerSesion);
router.get('/buscar/:nombre',controlador.obtenerSesionPorNombre);
router.delete('/:id', controlador.eliminarSesion);

export default router;
