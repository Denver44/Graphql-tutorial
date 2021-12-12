import express from "express";
import user from "./user.js";
import company from "./company.js";

const routes = express.Router();

routes.get("/", (_, res) => res.send("Welcome to GraphQL Tutorial"));

routes.use("/user", user);
routes.use("/company", company);

export default routes;
