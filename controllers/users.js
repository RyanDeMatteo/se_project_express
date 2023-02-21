const user = require("../models/user");

const createUser = (req, res) => {
  const { name, avatar } = req.body;

  user
    .create({ name, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) =>
      res.status(500).send({ message: "Error from createUser", err })
    );
};

const getUsers = (req, res) => {
  user
    .find({})
    .then((users) => res.status(200).send(users))
    .catch((err) =>
      res.status(500).send({ message: "Error from getUsers", err })
    );
};

const getUser = (req, res) => {
  const { userId } = req.params.id;

  user
    .findById(userId)
    .orFail()
    .then((user) => res.status(200).send(user))
    .catch((err) =>
      res.status(500).send({ message: "Error from getUserById", err })
    );
};

module.exports = { createUser, getUsers, getUser };
