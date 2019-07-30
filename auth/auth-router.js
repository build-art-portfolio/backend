const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const { isRequired, authenticate } = require("../middleware");
const Auth = require("./auth-model");

router.post("/register", isRequired, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Auth.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", isRequired, (req, res) => {
  let { username, password } = req.body;

  Auth.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log(user);
        const token = generateToken(user);
        const userID = user.id;
        console.log(token);
        res.status(200).json({ 
          message: `Welcome ${user.username}!`,
          token,
          userID
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    bio: user.bio,
    profilePhoto: user.profilePhoto
  };

  const jwtOptions = {
    expiresIn: "1d"
  };

  return jwt.sign(jwtPayload, secrets.jwtSecret, jwtOptions);
}

module.exports = router;
