import { Router } from 'express';
import * as controlador from '../controllers/sesionMetodoControlador';

const router = Router();

router.get('/:id',controlador.obtenerAsignacion);
router.get('/',controlador.listarAsignaciones);
router.post('/',controlador.crearAsignacion);

export default router;