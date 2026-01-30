const Router = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

const userRouter = Router();

// get all users
userRouter
  .get('/users', getUsers)

  // get one user
  .get('/users/:id', getUserById)

  // create a user
  .post('/users', createUser)

  // update a user
  .put('/users/:id', updateUser)

  // delete a user
  .delete('/users/:id', deleteUser)

module.exports = userRouter;