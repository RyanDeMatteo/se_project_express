const router = require("express").Router();
const clothingItem = require("./clothingItem");
const user = require("./user");
const { ERROR_CODES } = require("../utils/errors");

router.use("/items", clothingItem);
router.use("/users", user);

router.use((req, res) => {
  res.status(ERROR_CODES.NotFound).send({ message: "resource not found" });
});

module.exports = router;
