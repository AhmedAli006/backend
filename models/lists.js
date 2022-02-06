const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
  todo: String,


  

})

const listModel = mongoose.model("lists", listSchema);
module.exports = listModel;