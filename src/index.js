const express = require("express");
const app = express();
require("./db/conn"); // db connection file connected with our index file.
const port = process.env.PORT || 8000; //  process.env.port will assign a port when we put it on herekou any other web server. // For localhost it will be 80.

const Student = require("./models/students");
const StudentRouter = require("./routers/student.jsx");

// MIDDLEWARE
app.use(express.json());
app.use(StudentRouter);

//LISTENER
app.listen(port, () => {
  console.log(`listening the port at  ${port}`);
});
