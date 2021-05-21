import express, {json} from 'express';
import morgan from 'morgan';
// Importamos las rutas de nuestro proyecto
import MetodoRuta from './routes/metodo';
import sesionRuta from './routes/sesion';

const app = express();

app.use(morgan('dev'));
app.use(json());

// seccion de rutas
app.use('/api/metodo',MetodoRuta);
app.use('/api/sesion',sesionRuta)


export default app;