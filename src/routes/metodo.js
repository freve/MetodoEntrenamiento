import { Router } from 'express';
import { obtenerMetodos, crearMetodo} from '../controllers/metodoControlador';

const router = Router();

// rutas del CRUD de metodoControlador
router.get('/',obtenerMetodos);
router.post('/',crearMetodo)

export default router;
