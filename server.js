const knex = require("knex")(require("./knexfile.js"));
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// middleware to parse req.body
app.use(express.json);

app.get("/users", async (_req, res) => {
  try {
    const data = await knex.select("*").from("hikes_list");
    res.json(data);
  } catch {
    res.status(500).send("Error getting hikes");
  }
});

// server listen
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
