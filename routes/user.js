const router = require("express").Router();
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
} = require("../controllers/users");

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:_id", getUser);
router.put("/:_id", updateUser);

module.exports = router;
