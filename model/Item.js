const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  
  item_id: {
    type: Number,
    required: true,
  },
  item_type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
  
});

const fooditem = mongoose.model('Item', itemSchema);

module.exports = fooditem;
