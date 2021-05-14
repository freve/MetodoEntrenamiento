CREATE TABLE IF NOT EXISTS sesion(
    id INT NOT NULL,
    nombre VARCHAR(120) NOT NULL,
    descripcion VARCHAR(199),
    tipo_sesion VARCHAR(100) NOT NULL,
    microciclo VARCHAR(100) NOT NULL,
    CONSTRAINT sesion_pk PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS metodo(
    id SERIAL NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(120),
    carga SMALLINT NOT NULL,
    intensidad SMALLINT NOT NULL,
    duracion SMALLINT NOT NULL,
    privado BOOLEAN ,
    CONSTRAINT metodo_pk PRIMARY KEY(id)
);