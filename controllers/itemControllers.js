const Item = require('../models/Item')

//add item
exports.addItem = async(req,res) => {
  const newItem = new Item({
    name: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageURL: req.body.imageURL,
  })

  try {
    await newItem.save();
    res.send({item: newItem._id})
  }catch (err){
    res.send(err).status(404);
  }
}

//get a item
exports.getItem = async(req,res) => {
  try {
    const i = await Item.findById(req.body.id).exec();
     res.send(i).status(200);
   }
   catch (err) {
     console.log(err.message);
   }
}

//get all items
exports.getAllItem = async(req,res) => {
  try {
    const allItems = await Item.find();
    res.send(allItems).status(200);
  } 
  catch (err) {
    console.log(err);
    }
}

//delete item
exports.deleteItem = async(req,res) => {
  try {
    await Item.findByIdAndDelete(req.body.id).exec();
    res.send("Deleted").status(200);
  }
  catch (err) {
    console.log(err.message);
  }
}

//update a item
exports.updateItem = async(req,res) => {
  const newItem = new Item({
    name: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageURL: req.body.imageURL,
  });

  try {
    await Item.findById(req.body.id);
    await newItem.save();
    
  } catch (error) {
    console.log(error);
  }
}