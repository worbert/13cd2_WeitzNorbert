const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3307,
        password: "",
        database: "teliolimpia"
    }
)


// a szerver futásának ellenőrzése
app.get("/", (req, res) => {
    res.send("A szerver működik!")
}
)

app.get("/v", (req, res) => {
    const sql = "SELECT * FROM `versenyzok`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    }
    )
}
)
app.get("/v3", (req, res) => {
    const sql = "SELECT * FROM `versenyzok` where ID = 3";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    }
    )
}
)

app.listen(3000, () => {
    console.log('A szerver a 3000 porton fut!')
})
