const express = require('express')
const app = express();
const listModel = require("./models/lists")
const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://AhmedAli:AhmedAli123@cluster0.mznum.mongodb.net/testing123?retryWrites=true&w=majority", () => {
  console.log("DB conected");
})


app.use(express.json());
let port = process.env.port || 5000



app.get('/lists', (req, res) => {
  listModel.find({}, (err, result) => {
    if (err) {
      res.send(err).status(400)
      return;
    } else {
      res.send(result).status(200);
    }
  })

});

app.delete('/lists/:id', (req, res) => {
  

  listModel.findByIdAndRemove({ _id: id }, (err, result) => {
    if (err) {
      res.send(err).status(400)
      return;
    } else {
      res.json(result).status(200);
    }
  })

});

app.post('/lists', (req, res) => {
  
  let obj =req.body

  let newlist = new listModel(obj)

  newlist.save((err, result) => {
    if (err) {
      res.send(err).status(400)
      return;
    } else {
      res.json(result).status(200);
    }
  })
});

app.listen(port) 