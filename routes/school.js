import express from "express";
const router = express.Router();

import {
  createSchoolData,
  getSchoolData,
  getOneSchoolData,
  updateOneSchoolData,
  deleteOneSchoolData,
} from "../controller/school.js";

router.get("/", getSchoolData);
router.get("/:id", getOneSchoolData);
router.post("/", createSchoolData);
router.patch("/:id", updateOneSchoolData);
router.delete("/:id", deleteOneSchoolData);

export default router;
