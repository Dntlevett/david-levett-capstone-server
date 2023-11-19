const knex = require("knex")(require("./knexfile.js"));
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(cors());

// middleware to parse req.body
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/hikes", async (_req, res) => {
  try {
    const data = await knex("hikes_list");
    // const data = await knex.select("*").from("hikes_list");
    res.send(data);
  } catch {
    res.status(500).send("Error getting hikes");
    console.log("does this work?");
  }
});
app.get("/hikes/:id", async (req, res) => {
  const data = await knex("hikes_list").where("id", req.params.id);
  res.json(data);
});

// server listen
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
