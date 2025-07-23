const { model } = require("mongoose");

const errorHandlers = (error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Internal Server Error",
  });
};
module.exports = errorHandlers;
