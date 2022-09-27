const router = require('express').Router();
const login = require('../controllers/authControllers')

//login
router.get('/login', login.userLogin);

module.exports = router;