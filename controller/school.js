import { School } from "../models/model.js";

const createSchoolData = async (req, res) => {
  try {
    const user = new School(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getSchoolData = async (req, res) => {
  try {
    const SchoolData = await School.find();
    res.status(200).send(SchoolData);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getOneSchoolData = async (req, res) => {
  try {
    const _id = req.params.id; // through this we get the id from the url
    const SchoolData = await School.findById(_id); // we get the data by findById method.
    if (!SchoolData) {
      return res.status(404).send();
    } else {
      res.status(200).send(SchoolData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

const updateOneSchoolData = async (req, res) => {
  try {
    const _id = req.params.id; // through this we get the id from the url
    const UpdateSchools = await School.findByIdAndUpdate(_id, req.body, {
      new: true,
    }); // we get the data by findById method.
    res.status(200).send(UpdateSchools);
  } catch (e) {
    res.status(404).send(e);
  }
};

const deleteOneSchoolData = async (req, res) => {
  try {
    const deleteSchoolData = await School.findByIdAndDelete(req.params.id); // we get the data by findById method.
    console.log(deleteSchoolData);
    if (!deleteSchoolData) {
      return res.status(404).send();
    }
    res.status(200).send(deleteSchoolData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export {
  createSchoolData,
  getSchoolData,
  getOneSchoolData,
  updateOneSchoolData,
  deleteOneSchoolData,
};
