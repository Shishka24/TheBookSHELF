const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
const { getWeeklyBooks } = require("./BooksHandlers/handlerBooks");
// const { userInfo, validate } = require("../server/models/User");
const { MongoClient } = require("mongodb");
require("dotenv").config();
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// parse application/json
const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Success"))
  .catch(() => console.log(err));

app.use(morgan("tiny"));
app.use(express.json());
app.get("/", getWeeklyBooks);
app.post("/signin", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
    // res.send(user)
  } catch (err) {
    res.json({ status: "error", error: "Something is wrong!" });
  }
  // const client = new MongoClient(MONGO_URI, options);
  // try {
  //   await client.connect();
  //   console.log("Connected");
  //   const db = client.db("BOOKSHELF");
  //   const result = await db.collection("users").insertOne(req.body);
  //   res.status(201).json({ status: 201, data: req.body });
  // } catch (err) {
  //   res.status(500).json({ status: 500, data: req.body, message: err.message });
  // }
  // client.close();
  // console.log("disconnected!");
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
