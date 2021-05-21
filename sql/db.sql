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

CREATE TABLE IF NOT EXISTS tipo_archivo(
    id SERIAL NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(100),
    CONSTRAINT tipo_archivo_pk PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS sesion_metodo(
    id SERIAL NOT NULL,
    sesionid INTEGER NOT NULL,
    metodoid INTEGER NOT NULL,
    fecha_creacion TIMESTAMP NOT NULL,
    CONSTRAINT sesion_metodo_pk PRIMARY KEY(id),
    CONSTRAINT sesion_fk FOREIGN KEY(sesionid) REFERENCES sesion(id),
    CONSTRAINT metodo_fk PRIMARY KEY(metodoid) REFERENCES metodo(id)
);

CREATE TABLE IF NOT EXISTS archivo(
    id SERIAL NOT NULL,
    nombre VARCHAR(80) NOT NULL,
    ruta VARCHAR(255) NOT NULL,
    tipo INTEGER NOT NULL,
    metodoid INTEGER NOT NULL,
    CONSTRAINT archivo_pk PRIMARY KEY(id),
    CONSTRAINT archivo_tipo_fk FOREIGN KEY(tipo) REFERENCES tipo_archivo(id),
    CONSTRAINT archivo_metodo_fk FOREIGN KEY(metodoid) REFERENCES metodo(id)
);