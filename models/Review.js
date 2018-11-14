const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const Review = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  jobTitle: String,
  responsibilities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Responsibility"
    }
  ],
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Review", Review);
