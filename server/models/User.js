const { v4: uuidv4 } = require("uuid");
var bcrypt = require("bcryptjs"); //importing bcrypt package
const saltRounds = 10;
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const newUserID = uuidv4();
  const newUser = req.body;
  const { _id, username, email, birthday, password } = newUser;
  newUser._id = newUserID;
  newUser.type = "user";
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      newUser.password = hash;
    });
  });
  try {
    await client.connect();
    const db = client.db("BookShelf");
    const users = await db.collection("Users").find().toArray();
    if (users.find((user) => user.email === email)) {
      return res.status(200).json({
        status: 400,
        data: newUser,
        message: "Account already exists!",
      });
    } else if (users.find((user) => user.username === username)) {
      return res.status(200).json({
        status: 400,
        data: username,
        message: "Username already taken, please choose another one!",
      });
    } else {
      await db.collection("Users").insertOne(newUser);
      return res
        .status(200)
        .json({ status: 201, message: "New User CREATED!", data: newUser });
    }
  } catch (error) {
    console.log(error.stack);
    client.close();
  }
};
const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("BookShelf");
    const users = await db.collection("Users").find().toArray();
    return res
      .status(200)
      .json({ status: 200, data: users, message: "Success!" });
  } catch (error) {
    console.log(error.stack);
    client.close();
  }
};
const getUser = async (req, res) => {
  const _id = req.params._id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("BookShelf");
    const user = await db.collection("Users").findOne({ _id: parseInt(_id) });
    res.status(200).json({ status: 200, message: "Success", _id, data: user });
  } catch (err) {
    res.status(500).json({ status: 500, message: err });
  }
  client.close();
};
module.exports = { addUser, getUsers, getUser };
