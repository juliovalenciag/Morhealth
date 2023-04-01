import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    const q = req.query.cat
        ? "SELECT * FROM posts WHERE cat=?"
        : "SELECT * FROM posts"

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};


export const getPost = (req, res) => {
    const q = "SELECT p.idpost, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.iduser = p.uid WHERE p.idpost = ? ";

    db.query(q, [req.params.id], (err, data) => {
        if (err) {
            console.error("Error al obtener el post:", err);
            return res.status(500).json({ message: "Error al obtener el post" });
        }

        return res.status(200).json(data[0]);
    });
};


export const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("No autenticado");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token no valido");

        const q =
            "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
            req.body.date,
            userInfo.iduser,
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Post publicado");
        });
    });
};


export const deletePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("No autenticado");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        console.log('userInfo completo:', JSON.stringify(userInfo, null, 2));
        if (err) return res.status(403).json("Token no valido");

        console.log("userInfo:", userInfo); // Verificar userInfo

        const postId = req.params.id;
        console.log("postId:", postId); // Verificar postId

        const q = "DELETE FROM posts WHERE `idpost` = ? AND `uid` = ?";

        console.log("userInfo.id:", userInfo.iduser); // Verificar userInfo.id

        db.query(q, [postId, userInfo.iduser], (err, data) => {
            if (err) return res.status(403).json("Solo puedes borrar tus posts");

            return res.json("Post borrado");
        });
    });
};


export const updatePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("No autenticado");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token no valido");

        const postId = req.params.id;
        const q =
            "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

        const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

        db.query(q, [...values, postId, userInfo.iduser], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Post actualizado");
        });
    });
};
