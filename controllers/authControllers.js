const User = require("../models/User")
const bcrypt = require('bcryptjs');

//login controller
exports.userLogin = async(req,res) => {

    const userDtails = req.body;

    //checking email
    const checkEmail = await User.findOne({email: userDtails.email});
        if(!checkEmail) {
            res.send('Invalid Email');
        }
    const password = await bcrypt.compare(userDtails.password, checkEmail.password);
        if(!password) {
            res.send('Invalid Password');
        }

        if (password && checkEmail) {
            res.setHeader('Set-Cookie', 'login=true; MaxAge=10; Secure = true')
            res.send(req.session)
        }
}