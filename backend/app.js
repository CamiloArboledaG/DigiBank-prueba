const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Podríamos usar un ORM como prisma, pero por efectos prácticos se hará manual todo.

//SQL

const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "entrevista",
});

//Get all producto

app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        "SELECT producto.id,producto.nombre, producto.monto_max, tipo_producto.nombre_tipo FROM producto INNER JOIN tipo_producto ON producto.id_tipo_producto = tipo_producto.id;",
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

//Get producto Whit segmento id

app.get("/segmento/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        "SELECT producto.id,producto.nombre, producto.monto_max, segmento.nombre AS nombre_segmento, tipo_producto.nombre_tipo FROM producto INNER JOIN tipo_producto ON producto.id_tipo_producto = tipo_producto.id INNER JOIN producto_segmento ON producto.id=producto_segmento.id_producto AND producto_segmento.id_segmento=? INNER JOIN segmento ON segmento.id=?",
        [req.params.id, req.params.id],
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

//Get producto Whit tipo_producto id

app.get("/tipo/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        "SELECT producto.id,producto.nombre, producto.monto_max, tipo_producto.nombre_tipo FROM producto INNER JOIN tipo_producto ON producto.id_tipo_producto = tipo_producto.id WHERE tipo_producto.id=?",
        [req.params.id],
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});

//Get producto Whit categoria id

app.get("/categoria/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(
        "SELECT producto.id,producto.nombre, producto.monto_max, categoria.nombre AS nombre_categoria, tipo_producto.nombre_tipo FROM producto INNER JOIN tipo_producto ON producto.id_tipo_producto = tipo_producto.id INNER JOIN producto_categoria ON producto.id=producto_categoria.id_producto AND producto_categoria.id_categoria=? INNER JOIN categoria ON categoria.id=?",
        [req.params.id, req.params.id],
        (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
