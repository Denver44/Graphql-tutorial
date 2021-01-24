const express = require("express");
const app = express();
require("./db/conn"); // db connection file connected with our index file.
const port = process.env.PORT || 8000; //  process.env.port will assign a port when we put it on herekou any other web server. // For localhost it will be 80.

const Student = require("./models/students");

// MIDDLEWARE
app.use(express.json());

// API ROUTES

// As we have to create Student Data so we will use POST.

// Create Route
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get Route
app.get("/students", async (req, res) => {
  try {
    const StudentData = await Student.find();
    res.status(200).send(StudentData);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get an Individual student data
app.get("/students/:id", async (req, res) => {
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
});

// Update Route
app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id; // through this we get the id from the url
    const UpdateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    }); // we get the data by findById method.
    res.status(200).send(UpdateStudents);
  } catch (e) {
    res.status(404).send(e);
  }
});

// Delete Route
app.delete("/students/:id", async (req, res) => {
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
});

//LISTENER
app.listen(port, () => {
  console.log(`listening the port at  ${port}`);
});
