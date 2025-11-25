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