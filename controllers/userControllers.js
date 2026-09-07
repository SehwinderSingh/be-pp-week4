const user = require("../models/userModel.js");

const getAllUsers = (req, res) => {
  res.json(user.getAll());
};
const createUser = (req, res) => {
  const {
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
  } = req.body;
  const newUser = user.create(
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
  );
  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ error: "Failed to create user" });
  }
};

const getUserById = (req, res) => {
  const userId = req.params.userId;
  const foundUser = user.findById(userId);
  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};
const updateUserById = (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  const updatedUser = user.updateOneById(userId, updatedData);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

const deleteUserById = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = user.deleteOneById(userId);
  if (isDeleted) {
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
