const router = require("express").Router();

router.get("/phones", (req, res, next) => {
  res.json(
    "here we will have all the phones listed inside the data/phones.json file"
  );
});

router.get("/phones/:id", (req, res, next) => {
  res.json("here we will have the details for an individual phone");
});

module.exports = router;
