const knex = require("knex")(require("./knexfile.js"));
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const hikeRoutes = require("./routes/hikes.js");
const userData = require("./routes/userData.js");

app.use(express.static("data"));

app.get("/", (req, res) => res.send("Hello World!"));

// Routes for get and post requests
app.use(hikeRoutes);
app.use(userData);

// server listen
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
