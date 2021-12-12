import express from "express";
const router = express.Router();

import {
  createCompanyData,
  getCompanyData,
  getOneCompanyData,
  updateOneCompanyData,
  deleteOneCompanyData,
} from "../controller/Company.js";

router.get("/", getCompanyData);
router.get("/:id", getOneCompanyData);
router.post("/", createCompanyData);
router.patch("/:id", updateOneCompanyData);
router.delete("/:id", deleteOneCompanyData);

export default router;
