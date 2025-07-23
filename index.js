const express = require("express");
const mongoose = require("mongoose");
const errorHandlers = require("./middlewares/errorHandler.js");
const employeeRouter = require("./routes/EmployeeRouter.js");
const app = express();
require("dotenv").config();

//MiddleWares
app.use(express.json());

//Routes
app.use("/emp", employeeRouter);

//error Handlers
app.use(errorHandlers);

app.get("/", (req, res) => {
  res.json("welcome to Employee Management");
});

//mongodbConnection

const portNo = process.env.PORT_NUM;
console.log(portNo);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`mongodb is connected`);

    app.listen(portNo, () => {
      console.log(`server is runnng on ${portNo}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
