const User = require("../models/User")
const bcrypt = require('bcryptjs');

//login controller
exports.userLogin = async(req,res) => {

    const userDtails = req.body;

    //checking email
    const user = await User.findOne({email: userDtails.email});
        if(!user) {
            res.send('Invalid Email');
        }
    const password = await bcrypt.compare(userDtails.password, user.password);
        if(!password) {
            res.send('Invalid Password');
        }

        if (password && user) {
            res.setHeader('Set-Cookie', 'login=true; Secure = true')
            req.session.isLoggedIn = true;
            req.session.timeNow = Date.now();
            req.session.user = user;
            res.send(req.session)
        }
}

//logout controller
exports.userLogout = async (req,res) => {
    await req.session.destroy(() => {
        res.send('logout')
    })
}