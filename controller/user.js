import { User } from "../models/model.js";

const createUserData = async (req, res) => {
  try {
    const user = new User(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getUserData = async (req, res) => {
  try {
    const UserData = await User.find();
    res.status(200).send(UserData);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getOneUserData = async (req, res) => {
  try {
    const _id = req.params.id; // through this we get the id from the url
    const userData = await User.findById(_id); // we get the data by findById method.
    if (!userData) {
      return res.status(404).send();
    } else {
      res.status(200).send(userData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

const updateOneUserData = async (req, res) => {
  try {
    const _id = req.params.id; // through this we get the id from the url
    const UpdateUsers = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    }); // we get the data by findById method.
    res.status(200).send(UpdateUsers);
  } catch (e) {
    res.status(404).send(e);
  }
};

const deleteOneUserData = async (req, res) => {
  try {
    const deleteUserData = await User.findByIdAndDelete(req.params.id); // we get the data by findById method.
    console.log(deleteUserData);
    if (!deleteUserData) {
      return res.status(404).send();
    }
    res.status(200).send(deleteUserData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export {
  createUserData,
  getUserData,
  getOneUserData,
  updateOneUserData,
  deleteOneUserData,
};
