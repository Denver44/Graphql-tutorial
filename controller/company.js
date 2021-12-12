import { Company } from "../models/model.js";

const createCompanyData = async (req, res) => {
  try {
    const company = new Company(req.body);
    const createCompany = await company.save();
    res.status(201).send(createCompany);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getCompanyData = async (req, res) => {
  try {
    const CompanyData = await Company.find();
    res.status(200).send(CompanyData);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getOneCompanyData = async (req, res) => {
  try {
    const _id = req.params.id;
    const companyData = await Company.findById(_id);
    if (!companyData) return res.status(404).send();
    else res.status(200).send(companyData);
  } catch (e) {
    res.status(500).send(e);
  }
};

const updateOneCompanyData = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateCompanies = await Company.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateCompanies);
  } catch (e) {
    res.status(404).send(e);
  }
};

const deleteOneCompanyData = async (req, res) => {
  try {
    const deleteCompanyData = await Company.findByIdAndDelete(req.params.id);
    if (!deleteCompanyData) return res.status(404).send();
    res.status(200).send(deleteCompanyData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export {
  createCompanyData,
  getCompanyData,
  getOneCompanyData,
  updateOneCompanyData,
  deleteOneCompanyData,
};
