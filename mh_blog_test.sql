USE morhealth_app;

CREATE TABLE posts (
  idpost INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  image VARCHAR(255) NOT NULL,
  date TIMESTAMP NOT NULL,
  category VARCHAR(45) NOT NULL,
  uid INT,
  professional_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (uid) REFERENCES users(user_id),
  FOREIGN KEY (professional_id) REFERENCES professionals(professional_id)
  );