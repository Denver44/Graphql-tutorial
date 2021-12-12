import express from "express";
const router = express.Router();

import {
  createStudentData,
  getStudentData,
  getOneStudentData,
  updateOneStudentData,
  deleteOneStudentData,
} from "../controller/student.js";

router.get("/", getStudentData);
router.get("/:id", getOneStudentData);
router.post("/", createStudentData);
router.patch("/:id", updateOneStudentData);
router.delete("/:id", deleteOneStudentData);

export default router;
