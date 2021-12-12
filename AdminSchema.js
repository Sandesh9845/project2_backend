import mongoose from "mongoose";

const AdminSchema = mongoose.Schema(
  {
    fName: {
      type: String,
      require: true,
      default: "",
    },
    lName: {
      type: String,
      require: true,
      default: "",
    },
    role: {
      type: String,
      require: true,
      default: "guest",
    },

    email: {
      type: String,
      require: true,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      require: true,
      default: "",
    },

    addedAt: {
      type: Date,
      require: true,
      default: Date.now(),
    },
  },

  {
    timestamp: true,
  }
);

const AdminsSchema = mongoose.model("User", AdminSchema);

export default AdminsSchema;
