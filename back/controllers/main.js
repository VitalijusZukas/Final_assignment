const productDb = require("../models/product");

const usersDb = require("../models/usersSchema");
const { nanoid } = require("nanoid");

module.exports = {
  registerUser: async (req, res) => {
    const { email, passwordOne } = req.body;
    const userExists = await usersDb.findOne({ email });

    if (!!userExists) return res.send({ message: "Email already registered." });

    const user = new usersDb();
    user.email = email;
    user.password = passwordOne;
    user.secret = nanoid();
    await user.save();
    res.send({ userRegistered: true, user });
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const user = await usersDb.findOne({ email, password });
    if (!!user) {
      res.send({ loggedIn: true, user });
    } else {
      res.send({ loggedIn: false, message: "Bad credentials." });
    }
  },

  createProduct: async (req, res) => {
    const { title, image, price } = req.body;

    const product = new productDb();
    product.title = title;
    product.image = image;
    product.price = price;
    product.quantity = 1;
    await product.save();

    res.send({ success: true });
  },
  getAll: async (req, res) => {
    const products = await productDb.find();
    res.send({ products });
  },
  getSingle: async (req, res) => {
    const { id } = req.params;
    const product = await productDb.findOne({ _id: id });
    res.send({ product });
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    await productDb.findOneAndDelete({ _id: id });

    res.send({ success: true });
  },
};
