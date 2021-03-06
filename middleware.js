const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./config/secrets");

module.exports = {
  authenticate,
  isRequired
};

function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;
      req.userID = decoded.subject;

      next();
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}

function isRequired(req, res, next) {
  let user = req.body;

  if (!user.username || !user.password) {
    res.status(404).json({
      error: "Please enter a username and password to register/login."
    });
  } else {
    next();
  }
}

function validateUserId(req, res, next) {}
