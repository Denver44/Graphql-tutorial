"use strict";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import expressGraphQL from "express-graphql";
const graphqlHTTP = expressGraphQL.graphqlHTTP;

dotenv.config();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
  })
);

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

export default app;
