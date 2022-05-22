const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const {
  getWeeklyBooks,
  addComment,
  getComments,
} = require("./BooksHandlers/handlerBooks");
const { addUser, getUsers, getUser } = require("./models/User");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const PORT = 5000;

const app = express();
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", express.static(__dirname + "/"));
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(morgan("tiny"));
app.use(express.json());
app.get("/", getWeeklyBooks);
app.get("/login", getUsers);
app.get("/user/:username", getUser);
app.post("/signin", addUser);
app.post("/book", addComment);
app.get("/book", getComments);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
