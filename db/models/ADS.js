const { Schema } = mongoose = require("mongoose");
const {ObjectId} = Schema.Types

const ADSSchema = new Schema({
  //image, caption, card{title, subTitle, text, path}
  image: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  card: {
    subTitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
}, { timestamps: true });
module.exports = mongoose.models.ADS ? mongoose.model('ADS') : mongoose.model("ADS", ADSSchema);
//;//project.document = req.files.document[0]
