import mongoose from "mongoose";
import validator from "validator";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  phone: { type: Number, required: true, unique: true, min: 10 },
  email: {
    type: String,
    required: true,
    // We can throw the error msg like this
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  address: {
    type: String,
    required: true,
  },
});

const Student = new mongoose.model("Student", studentSchema);
export default Student;
