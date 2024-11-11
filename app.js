const express = require("express");
const session = require("express-session");
const passport = require("passport");
const path = require("node:path");
const router = require("./routes/indexRouter");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = 3008;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
