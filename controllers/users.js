const user = require("../models/user");
const { handleOnFailError, handleError } = require("../utils/errors");

const createUser = (req, res) => {
  const { name, avatar } = req.body;

  user
    .create({ name, avatar })
    .then((item) => res.status(200).send({ data: item }))
    .catch((err) => {
      handleError(err, res);
    });
};

const getUsers = (req, res) => {
  user
    .find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      handleError(err, res);
    });
};

const getUser = (req, res) => {
  const { _id } = req.params;

  user
    .findById({ _id })
    .orFail(() => {
      handleOnFailError;
    })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      handleError(err, res);
    });
};

const updateUser = (req, res) => {
  const { _id } = req.params;
  const { name, avatar } = req.body;

  user
    .findByIdAndUpdate(_id, { $set: { name, avatar } })
    .orFail(() => {
      handleOnFailError;
    })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      handleError(err, res);
    });
};

module.exports = { createUser, getUsers, getUser, updateUser };
