const jwt = require("jsonwebtoken");

const protected = (req, res, next) => {
  if (!req.cookies.token) {
    res.status(401).redirect("/");
  } else {
    const verified = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
    res.user = verified;
    next();
  }
};

const loginPro = (req, res, next) => {
  if (req.cookies.token) {
    res.redirect("/posts");
  } else {
    next();
  }
};

module.exports = { protected, loginPro };
