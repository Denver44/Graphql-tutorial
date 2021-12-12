import express from "express";
const router = express.Router();

import {
  createUserData,
  getUserData,
  getOneUserData,
  updateOneUserData,
  deleteOneUserData,
} from "../controller/User.js";

router.get("/", getUserData);
router.get("/:id", getOneUserData);
router.post("/", createUserData);
router.patch("/:id", updateOneUserData);
router.delete("/:id", deleteOneUserData);

export default router;
