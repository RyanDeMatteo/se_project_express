const router = require("express").Router();
const clothingItem = require("../routes/clothingItem");
const user = require("../routes/user");

router.use("/items", clothingItem);
router.use("/users", user);

router.use((req, res) => {
  res.status(404).send({ message: "router not found" });
});

module.exports = router;
