const fs = require("fs");
const path = require("path");
const router = require("express").Router();

// Make phone Data available for the routes
const filePath = path.join(__dirname, "../data/phones.json");
const phonesData = fs.readFileSync(filePath, "utf8");
const phones = JSON.parse(phonesData);

router.get("/phones", (req, res) => {
  res.json(phones);
});

router.get("/phones/:id", (req, res) => {
  const phoneId = req.params.id;

  const phone = phones.find((p) => p.id == phoneId);

  if (!phone) {
    return res.status(404).send("Phone not found");
  }

  res.json(phone);
});

module.exports = router;
