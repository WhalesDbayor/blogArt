const User = require('../schema/userSchema');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({message: 'No users found'});
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: 'Error fetching users', error: error.message});
  }
}

// Get user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: 'Error fetching user', error: error.message});
  }
}

// Create a user
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({message: 'Username, email and password are required'});
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({message: 'User created successfully'});
  } catch (error) {
    res.status(500).json({message: 'Error creating user', error: error.message});
  }
}

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({message: 'User not found'});
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({message: 'Error updating user', error: error.message});
  }
}

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }
    res.status(200).json({message: 'User deleted successfully'});
  } catch (error) {
    res.status(500).json({message: 'Error deleting user', error: error.message});
  }
}
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};