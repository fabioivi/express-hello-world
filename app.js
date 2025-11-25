const express = require("express");
const app = express();

app.use(express.json());


app.get("/meunome", (req, res) => {
  res.send("Meu nome é Fábio Barreto de Oliveira");
});