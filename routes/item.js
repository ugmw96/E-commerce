const router = require('express').Router();
const Item = require('../models/Item');

router.post('/addItem',async (req, res) => {
 
  //add new item
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
});


//get all items
  router.get('/getItems', async (req, res) => {

    try {
      const allItems = await Item.find();
      res.send(allItems).status(200);
    } 
    catch (err) {
      console.log(err);
      }
});

//delete item
  router.delete('/delete/:id', async (req, res) => {
    
    try {
      await Item.findByIdAndDelete(req.body.id).exec();
      res.send("Deleted").status(200);
    }
    catch (err) {
      console.log(err.message);
    }
  });

//get item by id
router.get('/findItem/:id', async (req, res) => {
    
  try {
   const i = await Item.findById(req.body.id).exec();
    res.send(i).status(200);
  }
  catch (err) {
    console.log(err.message);
  }
});

module.exports = router