import bcrypt from "bcryptjs";
import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {

    console.log("Register request received:", req.body);

    // Checar si existe el usuario
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("Usuario ya existe");

        // Hash contraseña
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `name`, `lastname_p`, `lastname_m`, `gender`, `age`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.name,
            req.body.lastname_p,
            req.body.lastname_m,
            req.body.gender,
            req.body.age,
            req.body.email,
            hash
        ];


        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("Usuario registrado");
        });
    });
}

export const login = (req, res) => {
    const { username, password } = req.body;
    console.log('Request body:', req.body);
    console.log('Username:', username);
    console.log('Password:', password);
    if (!username || !password) {
        return res.status(400).json({ message: "Nombre de usuario y contraseña requeridos" });
    }

    // Checar usuario
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
        if (data.length === 0) return res.status(404).json("Usuario no encontrado");

        // Checar contraseña
        if (!req.body.password || !data[0].password) {
            return res.status(400).json("Información de contraseña faltante");
        }

        let isPasswordCorrect = false;

        try {
            isPasswordCorrect = bcrypt.compareSync(
                req.body.password,
                data[0].password
            );
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Error interno al verificar contraseña" });
        }

        if (!isPasswordCorrect) {
            return res.status(400).json("Usuario o contraseña incorrectos");
        }

        const token = jwt.sign({ iduser: data[0].user_id, iat: Math.floor(Date.now() / 1000) }, "jwtkey");
        console.log("Token generado:", token);
        const { password, ...other } = data[0];

        res
            .cookie("access_token", token, {
                httpOnly: true
            })
            .status(200)
            .json(other)
    })
}

export const logout = (req, res) => {
    res.clearCookie("access_tokens", {
        sameSite: "none",
        secure: true
    }).status(200).json("Usuario ha cerrado sesión.")
}
