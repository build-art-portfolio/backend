const router = require("express").Router();
const Images = require("./images-model");

router.get("/", (req, res) => {
  Images.findImages()
    .then(images => {
      res.status(201).json(images);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "There was an issue gathering the images." });
    });
});

module.exports = router;
