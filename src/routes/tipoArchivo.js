import { Router } from 'express';
import * as controlador from '../controllers/tipoArchivoControlador';

const router = Router();

router.get('/',controlador.obtenerTiposDeArchivos);
router.get('/:id',controlador.obtenerTipoDeArchivo);


export default router;