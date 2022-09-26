const router = require('express').Router();
const loginController = require('../controllers/authControllers')

//login
router.get('/login', loginController.userLogin);

module.exports = router;