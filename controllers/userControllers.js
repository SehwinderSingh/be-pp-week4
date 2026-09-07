const User = require("../models/userModel.js");

const getAllUsers = (req, res) => {
  res.json(User.getAll());
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

  const newUser = User.addOne(
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
  );

  if (!newUser) {
    return res.status(400).json({ error: "Failed to create user" });
  }

  res.status(201).json(newUser);
};

const getUserById = (req, res) => {
  const { userId } = req.params;
  const foundUser = User.findById(userId);

  if (!foundUser) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(foundUser);
};

const updateUserById = (req, res) => {
  const { userId } = req.params;
  const updatedUser = User.updateOneById(userId, req.body);

  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(updatedUser);
};

const deleteUserById = (req, res) => {
  const { userId } = req.params;
  const isDeleted = User.deleteOneById(userId);

  if (!isDeleted) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(204).send();
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};