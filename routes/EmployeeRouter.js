const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  updateEmployee,
    getEmployeeById,
  deleteEmployee
} = require("../controllers/EmployeeController.js");

const router = express.Router();

router.post("/addEmp", createEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee)

module.exports = router;
