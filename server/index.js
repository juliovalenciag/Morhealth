import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "morhealth_app",
});

db.connect((err) => {
    if (err) {
        console.error("Error conectadonse a la base de datos:", err);
    } else {
        console.log("Conectado a la base de datos");
    }
});


app.post("/register", (req, res) => {
    console.log("Register request received:", req.body);

    const { email, username, password } = req.body;

    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [email, username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("Usuario ya existe");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const q = "INSERT INTO users(`username`, `name`, `lastname_p`, `lastname_m`, `gender`, `age`, `email`, `password`) VALUES (?)";
        const values = [
            username,
            req.body.name,
            req.body.lastname_p,
            req.body.lastname_m,
            req.body.gender,
            req.body.age,
            email,
            hash,
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("Usuario registrado");
        });
    });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log("Request body:", req.body);
    console.log("Username:", username);
    console.log("Password:", password);

    if (!username || !password) {
        return res.status(400).json({ message: "Nombre de usuario y contraseña requeridos" });
    }

    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [username], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
        if (data.length === 0) return res.status(404).json("Usuario no encontrado");

        console.log("Fetched user data:", data[0]);

        if (!password || !data[0].password) {
            return res.status(400).json("Información de contraseña faltante");
        }

        let isPasswordCorrect = false;

        try {
            isPasswordCorrect = bcrypt.compareSync(password, data[0].password);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Error interno al verificar contraseña" });
        }

        if (!isPasswordCorrect) {
            return res.status(400).json("Usuario o contraseña incorrectos");
        }

        const token = jwt.sign({ iduser: data[0].user_id, iat: Math.floor(Date.now() / 1000) }, "jwtkey");

        console.log("Password before removing:", data[0].password);

        const { password: passwordToRemove, ...user } = data[0];

        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json(user);
    });
});

app.post("/logout", (req, res) => {
    res
        .cookie("access_token", "", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        })
        .status(200)
        .json({});
});

app.listen(3001, () => {
    console.log("Corriendo backend server");
});