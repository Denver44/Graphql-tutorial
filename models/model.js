import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  firstName: String,
  id: String,
  age: Number,
  schoolId: ObjectId,
});

const schoolSchema = mongoose.Schema({
  id: String,
  name: String,
  desc: String,
  employees: [studentSchema],
});

const Student = mongoose.model("Student", studentSchema);
const School = mongoose.model("School", schoolSchema);

export { School, Student };
