const fs = require("fs");
const path = require("path");
const router = require("express").Router();

router.get("/phones", (req, res) => {
  const filePath = path.join(__dirname, "../data/phones.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading phones data.");
    }

    const phones = JSON.parse(data);
    res.json(phones);
  });
});

router.get("/phones/:id", (req, res, next) => {
  res.json("here we will have the details for an individual phone");
});

module.exports = router;
