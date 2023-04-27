const { Schema } = mongoose = require("mongoose");
const {ObjectId} = Schema.Types


const ProductSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },//new
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true
  },
  categeories: [
    {type: Array, ref: "Categeory", required: true}
  ],
  images: {
    type: Array,
  },
  description: {
    type: String
  },
  newPrice: {
    type: String,
  },
  discount: {
    type: String,
  },
  hasDiscout: {
    type: Boolean,
    default: false
  },
  dicountAmount: {
    type: String,
    default: '0'
  },
  colors: {
    type: Array,
    default: ["#000", "#7BBA3C", "#C21116", "#BFBFBF"]
  },
  reviews: {
    type: Array
  },
  rate: {
    type: String,
    default: "4.5"
  },
  inStock: {
    type: Number,
  },
  // productId: {
  //   type: Number
  // }, //id => productId
  
  smallImages: [{
    file: {
      type: ObjectId
    }
  }],
  orders: {
    type: Number
  }
}, { timestamps: true });
module.exports = mongoose.models.Product ? mongoose.model('Product') : mongoose.model("Product", ProductSchema);
//;//project.document = req.files.document[0]

//increatement the productId with every new product
ProductSchema.pre('save', function (next) {
  const user = this;
  mongoose.models.Product.find({}, function (err, users) {
    user.productId = users.length + 1;
    next();
  });
});