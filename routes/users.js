const usersRoute = require('express').Router();
//const { celebrateCreateUserMiddleware } = require('../middlewares/celebrate');

const {
  createUser,
  getUsers,
  deleteUsers,
} = require('../controllers/usersController');

//usersRoute.get('/', getUsers);
//usersRoute.delete('/:number', deleteUsers);
usersRoute.post('/', createUser);
//usersRoute.post('/', celebrateCreateUserMiddleware(), createUser);

module.exports = { usersRoute };
