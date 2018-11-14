const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const Review = new Schema({
  employee: String,
  jobTitle: String,
  comment: String,
//   responsibilities: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Responsibility"
//     }
//   ],
});

module.exports = mongoose.model("Review", Review);
