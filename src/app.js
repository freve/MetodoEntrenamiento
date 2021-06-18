import express, {json} from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Importamos las rutas de nuestro proyecto
import MetodoRuta from './routes/metodo';
import sesionRuta from './routes/sesion';
import TipoArchivo from './routes/tipoArchivo';
import Asignacion from './routes/sesionMetodo';

const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(cors());

// seccion de rutas
app.use('/api/metodo',MetodoRuta);
app.use('/api/sesion',sesionRuta);
app.use('/api/tipo-archivo',TipoArchivo);
app.use('/api/asignacion',Asignacion);


export default app;