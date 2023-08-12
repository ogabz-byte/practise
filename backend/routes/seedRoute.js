import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
  console.log(createdProducts);
  // await User.deleteMany({});
  // const createdUsers = await Product.insertMany(data.users);
  // res.send({ createdProducts, createdUsers });
  // console.log(createdUsers);
});

export default seedRouter;

//we are removing de initial object in de productmodel which is Product, then adding de data.js to de product
