import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "morhealth_app"
});

db.connect((err) => {
    if (err) {
        console.error("Error conectadonse a la base de datos:", err);
    } else {
        console.log("Conectado a la base de datos");
    }
});

export { db };