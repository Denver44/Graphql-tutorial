import express from "express";
import student from "./student.js";
import school from "./school.js";

const routes = express.Router();

routes.get("/", (_, res) => res.send("Welcome to GraphQL Tutorial"));

routes.use("/student", student);
routes.use("/school", school);

export default routes;
