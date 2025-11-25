const express = require("express");
const app = express();

app.use(express.json());

// desafio 1
app.get("/meunome", (req, res) => {
  res.send("Meu nome é Fábio Barreto de Oliveira");
});

// desafio 2
app.get("/eco", (req, res) => {
  res.send("eco");
});
