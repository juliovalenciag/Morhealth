import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "n0m3l0",
    database:"morshealth"
})