const knex = require("knex")(require("./knexfile.js"));
const express = require("express");
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
// post request to send user details to mySQL database
app.post("/userpost", async (req, res) => {
  console.log(req.body);
  console.log(res.req.body);
  // console.log(req.params.id);
  // console.log(req.body);
  const data = await knex("user_selection")
    //.where({ id: req.params.id })
    .insert(req.body);
  res.json(data);

  // const postUserSelection = async (req, res) => {
  //   console.log(req.body);
  //   // const newUser = req.body;
  //   // const createdUser = await knex("user_selection").insert(req.body);
  //   // const createdUserId = createdUser[0];
  //   // const newCompany = await knex("user_selection").where({
  //   //   id: createdUserId,
  //   // });
  // };
  // postUserSelection();

  //res.send("made it to post");
});

app.post("/buttonpost", async (req, res) => {
  const button = req.body.button;
  const query = await knex("user_selection");
  //   db.query(query, { button }, (error, results) => {
  //     if (error) {
  //       console.error(error);
  //       res.status(500).json({ status: 'error' });
  //     } else {
  //       res.status(200).json({ status: 'ok', results });
  //     }
  //   });
  // });
});

// server listen
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
