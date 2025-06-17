const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  stockLevel: Number,
  reorderPoint: Number,
  supplier: String,
});
module.exports = mongoose.model('Product', ProductSchema);
