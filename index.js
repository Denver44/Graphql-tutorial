import app from "./app.js";
import mongoose from "mongoose";
const PORT = process.env.PORT || 5000;
import routes from "./routes/router.js";

app.use("/", routes);

mongoose
  .connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening the port at  ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("error ", e);
  });
