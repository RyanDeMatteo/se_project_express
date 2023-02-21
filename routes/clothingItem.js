const router = require("express").Router;
const {
  createClothingItem,
  getClothingItems,
  updateItem,
  deleteItem,
} = require("../controllers/clothingItem");

router.post("/", createClothingItem);
router.get("/", getClothingItems);
router.put("/:itemId", updateItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
