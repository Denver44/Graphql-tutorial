import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: String,
  id: String,
  age: Number,
});

const CompanySchema = mongoose.Schema({
  id: String,
  name: String,
  desc: String,
  employees: [UserSchema],
});

const Student = mongoose.model("Student", UserSchema);
const Company = mongoose.model("School", CompanySchema);

export { Student, Company };
