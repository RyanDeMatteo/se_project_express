const clothingItem = require("../models/clothingItem");

const createClothingItem = (req, res) => {
  const { name, weather, imageUrl, ownerId, likesId, createdAt } = req.body;

  clothingItem
    .create({
      name,
      weather,
      imageUrl,
      owner: ownerId,
      likes: likesId,
      createdAt,
    })
    .then((item) => res.send({ data: item }))
    .catch((err) =>
      res.status(500).send({ message: "Error from createClothingItem", err })
    );
};

const getClothingItems = (req, res) => {
  clothingItem
    .find({})
    .then((items) => res.status(200).send(items))
    .catch((err) =>
      res.status(500).send({ message: "Error from getClothingItems", err })
    );
};

const updateItem = (req, res) => {
  const { itemId } = req.params.id;
  const { imageUrl } = req.body;

  clothingItem
    .findByIdAndUpdate(itemId, { $set: { imageUrl } })
    .orFail()
    .then((item) => res.status(200).send(item))
    .catch((err) =>
      res.status(500).send({ message: "Error from updateItem", err })
    );
};

const deleteItem = (req, res) => {
  const { itemId } = req.params.id;

  console.log(itemId);
  clothingItem
    .findByIdAndRemove(itemId)
    .orFail()
    .then((item) => res.status(204).send({}))
    .catch((err) =>
      res.status(500).send({ message: "Error from deleteItem", err })
    );
};

module.exports = {
  createClothingItem,
  getClothingItems,
  updateItem,
  deleteItem,
};
