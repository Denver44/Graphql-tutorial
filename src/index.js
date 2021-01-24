const express = require("express");
const app = express();
require("./db/conn"); // db connection file connected with our index file.
const port = process.env.PORT || 8000; //  process.env.port will assign a port when we put it on herekou any other web server. // For localhost it will be 80.

const Student = require("./models/students");

// MIDDLEWARE
app.use(express.json());

// API ROUTE
app.get("/", (req, res) => {
  res.send("Hoem Page For Rest-full API");
});

// As we have to create Student Data so we will use POST.
app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//LISTENER
app.listen(port, () => {
  console.log(`listening the port at  ${port}`);
});
