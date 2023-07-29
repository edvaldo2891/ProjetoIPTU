const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "planta_generic.mysql.dbaas.com.br",
  user: "planta_generic",
  password: "Eas9a5b771c@",
  database: "planta_generic",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let mysql = "INSERT INTO games ( name, cost, category) VALUES (?, ?, ?)";
  db.query(mysql, [name, cost, category], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let mysql =
    "SELECT * from games WHERE name = ? AND cost = ? AND category = ?";
  db.query(mysql, [name, cost, category], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM lancamentos";
  //let mysql = 'SELECT * FROM lancamentos WHERE 1 ORDER BY cod ASC LIMIT 20';
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      //console.log(res.send(result))
    }
  });
});

app.get("/getPlantaGenerica", (req, res) => {
  let mysql = 'SELECT * FROM urbano';
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      //console.log(res.send(result))
    }
  });
});

app.get("/getColetaLixo", (req, res) => {
  let mysql = 'SELECT * FROM coletalixo';
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      //console.log(res.send(result))
    }
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;
  let mysql = "UPDATE games SET name = ?, cost = ?, category = ? WHERE id = ?";
  db.query(mysql, [name, cost, category, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM games WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});

