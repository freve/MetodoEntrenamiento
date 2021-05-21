import { Router } from 'express';
import { obtenerMetodos, crearMetodo, obtenerMetodo, obtenerMetodoPorNombre, eliminarMetodo} from '../controllers/metodoControlador';

const router = Router();

// rutas del CRUD de metodoControlador
router.get('/',obtenerMetodos);
router.post('/',crearMetodo);
router.get('/:id',obtenerMetodo);
router.get('/buscar/:nombre',obtenerMetodoPorNombre);
router.delete('/:id', eliminarMetodo);

export default router;
