import express from "express";
import student from "./student.js";

const routes = express.Router();

routes.get("/", (_, res) => res.send("Welcome to GraphQL Tutorial"));

routes.use("/student", student);

export default routes;
