
module.exports = (req,res,next) => {
  if (!req.session.isLoggedIn) {
    return res.send('you loggin fist 222');
  }
  next();
};