import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  id: { type: String },
  age: { type: Number },
});

const Student = new mongoose.model("Student", studentSchema);
export default Student;
