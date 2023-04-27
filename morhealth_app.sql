DROP DATABASE IF EXISTS `morhealth_app`;
CREATE SCHEMA `morhealth_app`;
USE `morhealth_app`;

-- Crear tabla de profesionales
CREATE TABLE professionals (
    professional_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    lastname_p VARCHAR(12) NOT NULL,
    lastname_m VARCHAR(12) NOT NULL,
    location VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    occupation ENUM('nutriologo', 'entrenador', 'medicos') NOT NULL
); 

-- Crear tabla de usuarios
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(15) NOT NULL UNIQUE,
    name VARCHAR(24) NOT NULL,
    lastname_p VARCHAR(12) NOT NULL,
    lastname_m VARCHAR(12) NOT NULL,
    gender INT NOT NULL,
    age INT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    userImg VARCHAR(255)
);

-- Crear tabla de metricas
CREATE TABLE metrics (
    metric_id INT AUTO_INCREMENT PRIMARY KEY,
    metric_name VARCHAR(255) NOT NULL
);

-- Crear tabla de mediciones
CREATE TABLE measurements (
    measurement_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    metric_id INT NOT NULL,
    value FLOAT NOT NULL,
    date_time TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (metric_id) REFERENCES metrics(metric_id)
);


# Insertar 5 usuarios
/*
INSERT INTO users (username, name, lastname_p, lastname_m, gender, age, email, password, premium)
VALUES ('user1', 'Juan', 'Pérez', 'López', 1, 25, 'user1@email.com', 'password1', 0);

INSERT INTO users (username, name, lastname_p, lastname_m, gender, age, email, password, premium)
VALUES ('user2', 'María', 'García', 'Rodríguez', 0, 30, 'user2@email.com', 'password2', 0);

INSERT INTO users (username, name, lastname_p, lastname_m, gender, age, email, password, premium)
VALUES ('user3', 'Pedro', 'Martínez', 'Hernández', 1, 35, 'user3@email.com', 'password3', 1);

INSERT INTO users (username, name, lastname_p, lastname_m, gender, age, email, password, premium)
VALUES ('user4', 'Ana', 'González', 'Gómez', 0, 40, 'user4@email.com', 'password4', 0);

INSERT INTO users (username, name, lastname_p, lastname_m, gender, age, email, password, premium)
VALUES ('user5', 'Luis', 'Jiménez', 'Díaz', 1, 45, 'user5@email.com', 'password5', 1);

SELECT * FROM users;
*/

# Insertar 6 métricas
INSERT INTO metrics (metric_name) VALUES ('dreamTime');
INSERT INTO metrics (metric_name) VALUES ('calories');
INSERT INTO metrics (metric_name) VALUES ('heartRate');
INSERT INTO metrics (metric_name) VALUES ('daySteps');
INSERT INTO metrics (metric_name) VALUES ('water');
INSERT INTO metrics (metric_name) VALUES ('weight');

/*
# Insertar 4 mediciones para el usuario 3
INSERT INTO measurements (user_id, metric_id, value, date_time) VALUES (3, 2, 7.5, '2023-02-10 18:00:00');
INSERT INTO measurements (user_id, metric_id, value, date_time) VALUES (3, 2, 8.0, '2023-02-11 12:00:00');
INSERT INTO measurements (user_id, metric_id, value, date_time) VALUES (3, 2, 9.0, '2023-02-12 15:00:00');
INSERT INTO measurements (user_id, metric_id, value, date_time) VALUES (3, 2, 8.5, '2023-02-13 21:00:00');
INSERT INTO measurements (user_id, metric_id, value, date_time) VALUES (3, 2, 10, NOW());
*/

# Sentencia para obtener las mediciones de una metrica ordenadas por fecha:

/*
SELECT value, date_time
FROM measurements
WHERE metric_id = 2 AND user_id = 3
ORDER BY date_time
*/

/*Sentencia para obtener las últimas 2 mediciones de una métrica ordenadas por fecha (los muestra al revés)

SELECT value, date_time FROM measurements WHERE metric_id = 2 AND user_id = 3 ORDER BY date_time DESC LIMIT 2;

*/

