const router = require("express").Router();
const clothingItem = require("../models/clothingItem");

router.use("/items", clothingItem);
router.use((req, res) => {
  res.status(500).send({ message: "router not found" });
});

module.exports = router;
