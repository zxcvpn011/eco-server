const express = require('express');
const router = express.Router();
const Products = require("../db/models/Products")

router.get('/', (req, res) => {
  res.status(200).send("products is living here");
});

router.post('/get', async (req, res) => {
  let checkExist = await Products.findOne({name: req.body.name})
  if(checkExist) return res.json({err: "product already exist"})
  let product = new Products(req.body);
  await product.save()
  res.status(200).json({success: true})
});

router.post('/create', async (req, res) => {
  let checkExist = await Products.findOne({name: req.body.label})
  if(checkExist) return res.json({err: "product already exist"})
  let product = new Products(req.body);
  await product.save()
  res.status(200).json({success: true})
});

router.put('/edit/:id', async (req, res) => {
  let {id} = req.params
  let product = await Products.findById(id);
  res.status(200).send(product.toJSON());
});

router.delete('/delete/:id', async (req, res) => {
  let {id} = req.params
  let product = await Products.findByIdAndDelete(id);
  res.status(200).json(product);
});


module.exports = router;