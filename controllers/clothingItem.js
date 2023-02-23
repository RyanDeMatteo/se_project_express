const ClothingItem = require("../models/clothingItem");
const { handleOnFailError, handleError } = require("../utils/errors");

const createClothingItem = (req, res) => {
  const owner = req.user._id;
  const { name, weather, imageUrl } = req.body;
  const createdAt = Date.now();

  ClothingItem.create({
    name,
    weather,
    imageUrl,
    owner,
    createdAt,
  })
    .then((item) => res.status(200).send({ data: item }))
    .catch((err) => {
      console.log(err.message);
      handleError(err, res);
    });
};

const getClothingItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.send({ items }))
    .catch((err) => {
      handleError(err, res);
    });
};

const updateItem = (req, res) => {
  const { itemId } = req.params;
  const { imageUrl } = req.body;

  ClothingItem.findByIdAndUpdate(itemId, { $set: { imageUrl } })
    .orFail(() => {
      handleOnFailError();
    })
    .then((item) => res.send({ data: item }))
    .catch((err) => {
      handleError(err, res);
    });
};

const likeItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      handleOnFailError();
    })
    .then((item) => res.send({ data: item }))
    .catch((err) => {
      handleError(err, res);
    });
};

const dislikeItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      handleOnFailError();
    })
    .then((item) => res.send({ data: item }))
    .catch((err) => {
      handleError(err, res);
    });
};

const deleteItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndRemove(itemId)
    .orFail(() => {
      handleOnFailError();
    })
    .then(() => res.send({ message: "Item deleted" }))
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
