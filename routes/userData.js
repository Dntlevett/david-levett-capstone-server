const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));

const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("data"));

router.post("/userpost", async (req, res) => {
  //   console.log(req.body);
  //   console.log(res.req.body);
  try {
    const data = await knex("user_selection").insert(req.body);
    res.json(data);
  } catch {
    res.status(500).send("Error getting data");
    console.log("does this work?");
  }
});
router.post("/buttonpost", async (req, res) => {
  try {
    const button = req.body.button;
    const query = await knex("user_selection");
  } catch {
    res.status(500).send("Error getting button click");
  }
});

module.exports = router;
