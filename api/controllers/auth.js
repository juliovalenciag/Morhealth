import bcrypt from "bcryptjs";
import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {

    //Checar si existe el usuario
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.name], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("Usuario ya existe");

        //Hash contraseña

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("Usuario registrado");
        });
    });
}
export const login = (req, res) => {

    //checar usuario
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("Usuario no encontrado");

        //checar contraseña
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!isPasswordCorrect)
            return res.status(400).json("Usuario o contraseña incorrectos");

        const token = jwt.sign({ iduser: data[0].iduser, iat: Math.floor(Date.now() / 1000) }, "jwtkey");
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