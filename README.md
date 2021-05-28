# MetodoEntrenamiento
Gestión de los métodos de entrenamiento (ejercicios) para las sesiones de entrenamiento.
core en node js

## Primeros pasos

Para poder ejecutar correctamente el proyecto debemos tener el motor de base de datos
PostgreSQL y allí crearemos una base de datos llamada metodos, luego utilizaremos el ddl que encuentra en el directorio sql 

También debemos cambiar en nuestra carpeta utils el archivo de conexion en donde reemplazaremos nuestros datos 

```js
const conexion = new Sequelize('postgres://usuario:contraseña@localhost:puerto/nombre_bd')
```


## Instalar dependencias y ejecutar el proyecto en local

Para poder descarar todas las dependencias necesarias hacer lo siguiente
```bash
npm install package.json
```
Seguido de eso procedemos a ejecutar nuestro entorno en modo de desarrollo

```bash
npm run dev
```
