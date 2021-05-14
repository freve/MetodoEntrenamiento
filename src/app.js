import express from 'express';
import morgan from 'morgan';
// Importamos las rutas de nuestro proyecto
import MetodoRuta from './routes/metodo';


const app = express();

app.use(morgan('dev'));

// seccion de rutas
app.use('/api/metodo',MetodoRuta);



export default app;