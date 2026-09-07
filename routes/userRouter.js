const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userControllers.js");
router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:userId", getUserById);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);

module.exports = router;
