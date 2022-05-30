const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Podríamos usar un ORM como prisma, pero por efectos prácticos se hará manual todo.

//SQL

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "entrevista",
});

//Get all products

app.get("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query("SELECT * FROM producto", (err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
