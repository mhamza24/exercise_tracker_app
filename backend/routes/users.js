const router = require("express").Router();
let User = require("../models/user.modal");

router.route("/").get((req, res) => {
  console.log(":::::::");
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error :${err}`));
});

router.route("/add").post((req, res) => {
  console.log(":::::::");
  const username = req.body.username;
  const newUsername = new User({ username });

  newUsername
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json(`Error :${err}`));
});

module.exports = router;
