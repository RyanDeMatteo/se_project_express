const User = require("../models/user");
const { handleOnFailError, handleError } = require("../utils/errors");

const createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((item) => res.send({ data: item }))
    .catch((err) => {
      handleError(err, res);
    });
};

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => {
      handleError(err, res);
    });
};

const getUser = (req, res) => {
  const { _id } = req.params;

  User.findById(_id)
    .orFail(handleOnFailError)
    .then((data) => res.send(data))
    .catch((err) => {
      handleError(err, res);
    });
};

const updateUser = (req, res) => {
  const { _id } = req.params;
  const { name, avatar } = req.body;

  User.findByIdAndUpdate(_id, { $set: { name, avatar } })
    .orFail(handleOnFailError)
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      handleError(err, res);
    });
};

module.exports = { createUser, getUsers, getUser, updateUser };
