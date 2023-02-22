const router = require("express").Router();
const {
  createClothingItem,
  getClothingItems,
  updateItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItem");

router.post("/", createClothingItem);
router.get("/", getClothingItems);
router.put("/:itemId", updateItem);
router.put("/:itemId/likes", likeItem);
router.put("/itemId/likes", dislikeItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
