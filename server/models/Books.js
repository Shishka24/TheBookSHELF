const mongoose = require("mongoose");

const BookInfo = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);
module.export = mongoose.model("User", BookInfo);
