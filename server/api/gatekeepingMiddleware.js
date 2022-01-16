// store all of our functions that act as middleware between our requests and responses
const {
  models: { User },
} = require("../db");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
<<<<<<< HEAD
    next()
=======
    next();
>>>>>>> 628d3f0545b83301123da94819473f4bafa1d644
  } catch (e) {
    next(e);
  }
};

// checks to see if the user is an admin to access certain routes
const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send("You shall not pass!");
  } else {
    //if my user IS an admin, pass them forward!
    console.log("is Admin!");
    next();
  }
};

module.exports = {
  requireToken,
  isAdmin
};
