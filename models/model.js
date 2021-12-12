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

const User = mongoose.model("User", UserSchema);
const Company = mongoose.model("Company", CompanySchema);

export { User, Company };
