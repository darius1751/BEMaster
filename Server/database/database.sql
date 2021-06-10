CREATE DATABASE bemaster;
USE bemaster;
CREATE TABLE estudiante
(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    documento_identidad VARCHAR(13) UNIQUE NOT NULL,
    nombre VARCHAR(125) NOT NULL,
    fecha_nacimiento DATE NOT NULL
);
CREATE TABLE mentor
(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    documento_identidad VARCHAR(13) UNIQUE NOT NULL,
    nombre VARCHAR(125) NOT NULL
);
CREATE TABLE carrera
(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre VARCHAR(125) NOT NULL,
    duracion_en_annios SMALLINT NULL DEFAULT NULL
);
CREATE TABLE clase
(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre VARCHAR(125) NOT NULL,
    duracion_en_horas TIME NULL DEFAULT NULL
);
CREATE TABLE estudiante_x_mentor
(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    estudiante_id INT NOT NULL REFERENCES estudiante(id),
    mentor_id INT NOT NULL REFERENCES mentor(id)
);
CREATE TABLE mentor_x_clase
(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    mentor_id INT NOT NULL REFERENCES mentor(id),
    clase_id INT NOT NULL REFERENCES clase(id)
);
CREATE TABLE clase_x_carrera
(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    clase_id INT NOT NULL REFERENCES clase(id),
    carrera_id INT NOT NULL REFERENCES carrera(id)
);

ALTER TABLE estudiante_x_mentor ADD FOREIGN KEY (estudiante_id) REFERENCES estudiante(id) ON UPDATE CASCADE;
ALTER TABLE estudiante_x_mentor ADD FOREIGN KEY (mentor_id) REFERENCES mentor(id) ON UPDATE CASCADE;
ALTER TABLE mentor_x_clase ADD FOREIGN KEY (mentor_id) REFERENCES mentor(id) ON UPDATE CASCADE;
ALTER TABLE mentor_x_clase ADD FOREIGN KEY (clase_id) REFERENCES clase(id) ON UPDATE CASCADE;
ALTER TABLE clase_x_carrera ADD FOREIGN KEY (clase_id) REFERENCES clase(id) ON UPDATE CASCADE;
ALTER TABLE clase_x_carrera ADD FOREIGN KEY (carrera_id) REFERENCES carrera(id) ON UPDATE CASCADE;

--ALTER TABLE mentor AUTO_INCREMENT = 1;
--ALTER TABLE estudiante AUTO_INCREMENT = 1;
--ALTER TABLE clase AUTO_INCREMENT = 1;
--ALTER TABLE carrera AUTO_INCREMENT = 1
