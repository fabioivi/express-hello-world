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

// desafio 3
app.get("/pokemons", (req, res) => {
  const pokemons = [
    "Pikachu",
    "Caterpie",
    "Pidgeotto",
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Krabby",
    "Primeape",
    "Muk",
    "Tauros"
  ];

  res.json(pokemons);
});

// desafio 4

app.post("/series", (req, res) => {
  const { series } = req.body;

  if (!series || !Array.isArray(series) || series.length < 3) {
    return res.status(400).json({
      erro: "Envie um JSON contendo um array com pelo menos 3 séries, ex: { \"series\": [\"A\", \"B\", \"C\"] }"
    });
  }

  res.json({
    mensagem: "Suas séries favoritas:",
    favoritas: series.slice(0, 3)
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});