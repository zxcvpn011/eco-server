const { Schema } = mongoose = require("mongoose");
const { ObjectId } = Schema.Types

const TokensSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  products: [
    {type: ObjectId, ref: "Product"}
  ],
}, { timestamps: true });
module.exports = mongoose.models.Tokens ? mongoose.model('Tokens') : mongoose.model("Tokens", TokensSchema);
//;//project.document = req.files.document[0]