const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const Review = new Schema({
  employee: String,
  jobTitle: String,
  responsibilities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Responsibility"
    }
  ],
  comment: String,
});

module.exports = mongoose.model("Review", Review);
