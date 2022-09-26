const router = require('express').Router();
const user = require('../controllers/userControllers')

//add user
router.post('/add', user.signupUser);

//login user
router.get('/login' ,user.loginUser);

//get all users
router.get('/getAll',user.getAllUsers);

//update user dtails
router.put('/update',user.updateUser);

//delete user
router.delete('/delete', user.deleteUser);

//get a user
router.get('/user/:id', user.getUser);

module.exports = router;