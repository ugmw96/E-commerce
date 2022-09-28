const User = require('../models/User');
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');

//sing up user=>
exports.signupUser = async (req,res) => {

  // // mailing servise configuration
  // sgMail.setApiKey(process.env.NODEMAILER_API);
  // const message = {
  //   to: 'ugmw95@gmail.com',
  //   from: 'node-app@gmail.com',
  //   subject: 'Signup successfully',
  //   html: '<h2>Signup successfully</h2>',
  // }
  // await sgMail.send(message);

  //checking existing emails
  const existingEmail = await User.findOne({email: req.body.email});
  if (existingEmail) {
    return res.send('This is existing Email');
  };

  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
 
  try {
    await newUser.save();
    res.send({id: newUser._id});

  } catch (error) {
    console.log(error);
  }
}

//get All users =>
exports.getAllUsers = async (req,res) => {
  try {
    const users = await User.find();
    res.send(users).status(200);
  } catch (error) {
    console.log(error);
  }
}

//delete user by ID => 
exports.deleteUser = async(req,res) => {

}

//update user by ID =>
exports.updateUser = async(res,req) => {

}

//get user by ID =>
exports.getUser = async(res,req) => {
  
}

//login user=>
exports.loginUser = async(req,res) => {

}