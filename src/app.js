const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(require("./controllers/authController"));

module.exports = app;
