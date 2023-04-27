USE `morhealth_app`;

CREATE TABLE exercises (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  bodyPart VARCHAR(255) NOT NULL,
  target VARCHAR(255) NOT NULL,
  equipment VARCHAR(255),
  gifUrl VARCHAR(255)
);

CREATE TABLE training_plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE routines (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE routine_schedule (
	id INT AUTO_INCREMENT PRIMARY KEY,
	routine_id INT NOT NULL,
	day ENUM('Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom') NOT NULL,
	FOREIGN KEY (routine_id) REFERENCES routines(id)
);

CREATE TABLE routine_exercises (
  id INT AUTO_INCREMENT PRIMARY KEY,
  routine_id INT NOT NULL,
  exercise_id INT NOT NULL,
  set_number INT,
  rest_time INT,
  observations TEXT,
  FOREIGN KEY (routine_id) REFERENCES routines(id),
  FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);

CREATE TABLE exercise_sets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  routine_exercise_id INT NOT NULL,
  set_type ENUM('Repeticiones y sets', 'Tiempo', 'Repeticiones', 'Carga') NOT NULL,
  set_number INT,
  repetitions INT,
  duration INT,
  weight FLOAT,
  FOREIGN KEY (routine_exercise_id) REFERENCES routine_exercises(id)
);

CREATE TABLE personal_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  exercise_id INT NOT NULL,
  repetitions INT,
  weight FLOAT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);

CREATE TABLE plan_routines (
  id INT AUTO_INCREMENT PRIMARY KEY,
  training_plan_id INT NOT NULL,
  routine_id INT NOT NULL,
  FOREIGN KEY (training_plan_id) REFERENCES training_plans(id),
  FOREIGN KEY (routine_id) REFERENCES routines(id)
);

# Crearle un plan de entrenamiento a un usuario

/*
INSERT INTO training_plans (user_id, name, description)
VALUES (1, 'Entrenamiento de hipertrofia', 'Un plan de entrenamiento enfocado en el aumento de masa muscular a través de ejercicios de alta intensidad y volumen.');
*/

# Insertar 10 ejercicios

/*
INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Sentadilla', 'Piernas', 'Cuádriceps', 'Barra', 'https://example.com/sentadilla.gif');

INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Press de banca', 'Pecho', 'Pectorales', 'Barra', 'https://example.com/press-de-banca.gif');

INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Peso muerto', 'Espalda', 'Lumbares', 'Barra', 'https://example.com/peso-muerto.gif');

INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Curl de bíceps', 'Brazos', 'Bíceps', 'Mancuernas', 'https://example.com/curl-de-biceps.gif');

INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Extensiones de tríceps', 'Brazos', 'Tríceps', 'Mancuernas', 'https://example.com/extensiones-de-triceps.gif');

INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Dominadas', 'Espalda', 'Dorsales', 'Barra de dominadas', 'https://example.com/dominadas.gif');

INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Press militar', 'Hombros', 'Deltoides', 'Barra', 'https://example.com/press-militar.gif');

INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Zancadas', 'Piernas', 'Cuádriceps', 'Mancuernas', 'https://example.com/zancadas.gif');

INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Remo con mancuerna', 'Espalda', 'Dorsales', 'Mancuerna', 'https://example.com/remo-con-mancuerna.gif');

INSERT INTO exercises (name, bodyPart, target, equipment, gifUrl)
VALUES ('Abdominales', 'Abdomen', 'Abdominales', 'Sin equipo', 'https://example.com/abdominales.gif');
*/

-- Crear una nueva rutina de ejercicios para el usuario con id = 1
/*
INSERT INTO routines (user_id, name)
VALUES (1, 'Rutina de fuerza');
*/

-- Obtén el ID de la rutina recién creada
/*
SET @last_routine_id = LAST_INSERT_ID();
*/

-- Agrega ejercicios a la rutina recién creada
/*
INSERT INTO routine_exercises (routine_id, exercise_id, set_number, rest_time)
VALUES (@last_routine_id, 1, 1, 60);

INSERT INTO routine_exercises (routine_id, exercise_id, set_number, rest_time)
VALUES (@last_routine_id, 2, 2, 60);

INSERT INTO routine_exercises (routine_id, exercise_id, set_number, rest_time)
VALUES (@last_routine_id, 3, 3 , 60);

INSERT INTO routine_exercises (routine_id, exercise_id, set_number, rest_time)
VALUES (@last_routine_id, 4, 4, 60);

INSERT INTO routine_exercises (routine_id, exercise_id, set_number, rest_time)
VALUES (@last_routine_id, 5, 5, 60);
*/

-- Obtén el ID del ejercicio con id = 3 en la rutina recién creada
/*
SELECT @routine_exercise_id := id
FROM routine_exercises
WHERE routine_id = @last_routine_id AND exercise_id = 3;
*/

-- Configurar el primer set: 10 repeticiones, 20 kg
/*
INSERT INTO exercise_sets (routine_exercise_id, set_type, set_number, repetitions, weight)
VALUES (@routine_exercise_id, 'Repeticiones y sets', 1, 10, 20);
*/

-- Configurar el segundo set: 12 repeticiones, 15 kg
/*
INSERT INTO exercise_sets (routine_exercise_id, set_type, set_number, repetitions, weight)
VALUES (@routine_exercise_id, 'Repeticiones y sets', 2, 12, 15);
*/

-- Configurar el tercer set: 15 repeticiones, 10 kg
/*
INSERT INTO exercise_sets (routine_exercise_id, set_type, set_number, repetitions, weight)
VALUES (@routine_exercise_id, 'Repeticiones y sets', 3, 15, 10);
*/