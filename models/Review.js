const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const Review = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee"
  },
  jobTitle: String,
//   responsibilities: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Responsibility"
//     }
//   ],
});

module.exports = mongoose.model("Review", Review);
