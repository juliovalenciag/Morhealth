USE `morhealth_app`;

-- Create the table 'meal_plans'
CREATE TABLE meal_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    goal VARCHAR(100) NOT NULL,
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create the table 'custom_diets'
CREATE TABLE diets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    days VARCHAR(255) NOT NULL,
    meal_plan_id INT,
    FOREIGN KEY (meal_plan_id) REFERENCES meal_plans(id)
);

CREATE TABLE diet_schedule (
	id INT AUTO_INCREMENT PRIMARY KEY,
	diet_id INT NOT NULL,
	day ENUM('Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom') NOT NULL,
	FOREIGN KEY (diet_id) REFERENCES diets(id)
);

-- Create the table 'recipes'
CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    preparation_time INT,
    cooking_time INT,
    difficulty_level VARCHAR(100),
    meal_type VARCHAR(100),
    cuisine_type VARCHAR(100)
);

-- Create the table 'ingredients'
CREATE TABLE ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    calories_per_serving FLOAT NOT NULL,
    protein_per_serving FLOAT NOT NULL,
    fat_per_serving FLOAT NOT NULL,
    carbohydrates_per_serving FLOAT NOT NULL
);

-- Create the table 'recipes_ingredients' (intermediate table for many-to-many relationship between recipes and ingredients)
CREATE TABLE recipes_ingredients (
    recipe_id INT,
    ingredient_id INT,
    amount FLOAT NOT NULL,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);