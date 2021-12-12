import Student from "../models/students.js";

const createStudentData = async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getStudentData = async (req, res) => {
  try {
    const StudentData = await Student.find();
    res.status(200).send(StudentData);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getOneStudentData = async (req, res) => {
  try {
    const _id = req.params.id; // through this we get the id from the url
    const studentData = await Student.findById(_id); // we get the data by findById method.
    if (!studentData) {
      return res.status(404).send();
    } else {
      res.status(200).send(studentData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

const updateOneStudentData = async (req, res) => {
  try {
    const _id = req.params.id; // through this we get the id from the url
    const UpdateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    }); // we get the data by findById method.
    res.status(200).send(UpdateStudents);
  } catch (e) {
    res.status(404).send(e);
  }
};

const deleteOneStudentData = async (req, res) => {
  try {
    const deleteStudentData = await Student.findByIdAndDelete(req.params.id); // we get the data by findById method.
    console.log(deleteStudentData);
    if (!deleteStudentData) {
      return res.status(404).send();
    }
    res.status(200).send(deleteStudentData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export {
  createStudentData,
  getStudentData,
  getOneStudentData,
  updateOneStudentData,
  deleteOneStudentData,
};
