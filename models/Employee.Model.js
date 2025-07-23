const mongoose = require("mongoose");

const Employee = mongoose.Schema(
  {
    empName: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    dept: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const employees = mongoose.model("Employees", Employee);
module.exports = employees;
