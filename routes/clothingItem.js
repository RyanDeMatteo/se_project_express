const router = require("express").Router();
const {
  createClothingItem,
  getClothingItems,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItem");

router.post("/", createClothingItem);
router.get("/", getClothingItems);
router.put("/:itemId/likes", likeItem);
router.delete("/:itemId/likes", dislikeItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
