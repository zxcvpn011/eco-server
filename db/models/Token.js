const { Schema } = mongoose = require("mongoose");
const {ObjectId} = Schema.Types

const TokensSchema = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // this is the expiry time in seconds
  },
}, { timestamps: true });
module.exports = mongoose.models.Tokens ? mongoose.model('Tokens') : mongoose.model("Tokens", TokensSchema);
//;//project.document = req.files.document[0]