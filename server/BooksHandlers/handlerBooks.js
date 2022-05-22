const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getWeeklyBooks = (req, res) => {
  const options = {
    method: "GET",
    url: "https://hapi-books.p.rapidapi.com/week/horror",
    headers: {
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      "X-RapidAPI-Key": "2385336b51mshac5593ff9c397a4p1698ffjsnb6910d60abef",
    },
    params: {
      _limit: 10,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      res.status(200).json({ status: 200, data: response.data });
    })
    .catch(function (error) {
      console.error(error);
    });
};

const addComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const newUser = req.body;
  const { comments, author } = newUser;
  try {
    await client.connect();
    const db = client.db("BookShelf");
    console.log("CoNNected");
    const user = await db.collection("Users").findOne(author);
    const comment = await db.collection("Comments").insertOne(newUser);
    return res.status(200).json({
      status: 201,
      message: "Comment Created",
      data: comment,
    });
  } catch (err) {
    console.log(err.stack);
    client.close();
    console.log("Disconnected!");
  }
};
const getComments = async (req, res) => {
  const _id = req.params._id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("BookShelf");
    const comments = await db.collection("Comments").find().toArray();
    res
      .status(200)
      .json({ status: 200, message: "Success", _id, data: comments });
  } catch (err) {
    res.status(500).json({ status: 500, message: err });
  }
  client.close();
};

module.exports = { getWeeklyBooks, addComment, getComments };
