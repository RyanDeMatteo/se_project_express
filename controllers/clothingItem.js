const clothingItem = require("../models/clothingItem");
const { handleOnFailError, handleError } = require("../utils/errors");

const createClothingItem = (req, res) => {
  const owner = req.user._id;
  const { name, weather, imageUrl } = req.body;
  const createdAt = Date.now();

  clothingItem
    .create({
      name,
      weather,
      imageUrl,
      owner,
      createdAt,
    })
    .then((item) => res.status(200).send({ data: item }))
    .catch((err) => {
      handleError(err, res);
    });
};

const getClothingItems = (req, res) => {
  clothingItem
    .find({})
    .then((items) => res.status(200).send({ items }))
    .catch((err) => {
      handleError(err, res);
    });
};

const updateItem = (req, res) => {
  const { itemId } = req.params;
  const { imageUrl } = req.body;

  clothingItem
    .findByIdAndUpdate(itemId, { $set: { imageUrl } })
    .orFail(() => {
      handleOnFailError();
    })
    .then((item) => res.status(200).send({ data: item }))
    .catch((err) => {
      handleError(err, res);
    });
};

const likeItem = (req, res) => {
  clothingItem
    .findByIdAndUpdate(
      req.params.itemId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    )
    .orFail(() => {
      handleOnFailError();
    })
    .then((item) => res.status(200).send({ data: item }))
    .catch((err) => {
      handleError(err, res);
    });
};

const dislikeItem = (req, res) => {
  clothingItem
    .findByIdAndUpdate(
      req.params.itemId,
      { $pull: { likes: req.user._id } },
      { new: true }
    )
    .orFail(() => {
      handleOnFailError();
    })
    .then((item) => res.status(200).send({ data: item }))
    .catch((err) => {
      handleError(err, res);
    });
};

const deleteItem = (req, res) => {
  const { itemId } = req.params;

  clothingItem
    .findByIdAndDelete(itemId)
    .orFail(() => {
      handleOnFailError();
    })
    .then(() => res.status(200).send({}))
    .catch((err) => {
      handleError(err, res);
    });
};

module.exports = {
  createClothingItem,
  getClothingItems,
  updateItem,
  deleteItem,
  likeItem,
  dislikeItem,
};
