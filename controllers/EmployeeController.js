const EmployeeModel = require("../models/Employee.Model.js");
const createEmployee = async (req, res, next) => {
  try {
    const { empName, job, salary, dept } = req.body;
    const addEmployee = new EmployeeModel({
      empName: empName,
      job: job,
      salary: salary,
      dept: dept,
    });

    const savedUser = await addEmployee.save();

    res.status(200).json({
      message: "Employee Added successfully",
      employee: savedUser,
    });
  } catch (error) {
    next(error);
  }
};

const getAllEmployees = async (req, res, next) => {
  try {
    const allEmployees = await EmployeeModel.find();
    res.status(200).json({
      message: "All Employees",
      Employees: allEmployees,
    });
  } catch (error) {
    next(error);
  }
};

const getEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);

    const getEmployee = await EmployeeModel.findById(id);
    res.status(200).json({
      message: "Single Employee",
      Employee: getEmployee,
    });
  } catch (error) {
    next(error);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updateEmployee = await EmployeeModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    //     const data = await EmployeeModel.updateMany({ name: req.params.id }, req.body, {
    // new: true,
    //     });

    res.status(200).json({
      message: "Employee Updated successfully",
      employee: updateEmployee,
    });
  } catch (error) {
    next(error);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    await EmployeeModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Employee Deleted successfully..",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  getEmployeeById,
  deleteEmployee,
};
