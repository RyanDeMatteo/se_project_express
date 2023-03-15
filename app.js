const express = require("express");
const mongoose = require("mongoose");
/* const cors = require("cors"); */
const { createUser, login } = require("./controllers/users");
const clothingItems = require("./routes/clothingItem");
const users = require("./routes/user");

const { PORT = 3001 } = process.env;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

const routes = require("./routes");

app.use(express.json());

/* app.use(cors()); */

app.post("/signin", login);
app.post("/signup", createUser);
app.use("/items", clothingItems);
app.use("/users", users);

/* app.use((req, res, next) => {
  req.user = {
    _id: "63f575ab2fdabd491d723909",
  };
  next();
}); */

app.use(routes);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
