import express from "express";
const router = express.Router();

import {
  createStudentData,
  getStudentData,
  getOneStudentData,
  updateOneStudentData,
  deleteOneStudentData,
} from "../controller/student.js";

router.get("/students", getStudentData);
router.get("/students/:id", getOneStudentData);
router.post("/students", createStudentData);
router.patch("/students/:id", updateOneStudentData);
router.delete("/students/:id", deleteOneStudentData);

export default router;
