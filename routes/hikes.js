const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));

const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

// app.use(express.json());

app.use(express.static("data"));

// middleware to parse req.body
app.use(express.json());

router.get("/hikes", async (_req, res) => {
  try {
    const data = await knex("hikes_list");
    // console.log(data);
    res.send(data);
  } catch {
    res.status(500).send("Error getting hikes");
    console.log("does this work?");
  }
});

router.get("/hikes/:id", async (req, res) => {
  try {
    const data = await knex("hikes_list").where("id", req.params.id);
    res.json(data);
  } catch {
    res.status(500).send("Error getting that hike id #");
    console.log("does this work?");
  }
});

//Get hikes by difficulty

router.get("/hikes/difficulty/:difficulty", async (req, res) => {
  try {
    const data = await knex("hikes_list").where({
      difficulty: req.params.difficulty,
    });
    res.json(data);
  } catch {
    res.status(500).send("Error getting that hike id #");
    console.log("does this work?");
  }
});

module.exports = router;
