const router = require('express').Router();
const auth = require('../controllers/authControllers')

//login
router.post('/login', auth.userLogin);

//logout
router.get('/logout', auth.userLogout);

module.exports = router;