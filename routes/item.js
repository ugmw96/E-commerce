const router = require('express').Router();
const item = require('../controllers/itemControllers');
const isAuth = require('../middleware/is-auth');

//add a item
router.post('/addItem',isAuth,item.addItem);

//get all items
router.get('/getItems',item.getAllItem)

//delete item
router.delete('/delete/:id', item.deleteItem)

//get item by id
router.get('/getItem/:id', item.getItem)

module.exports = router