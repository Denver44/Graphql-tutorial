const mongoose = require("mongoose");

// "mongodb://Adrress:PORT/db-name"
mongoose
  .connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("db connection Successfull....");
  })
  .catch((err) => {
    console.log(err);
  });
