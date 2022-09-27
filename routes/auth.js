const router = require('express').Router();
const login = require('../controllers/authControllers')

//login
router.post('/login', login.userLogin);

module.exports = router;