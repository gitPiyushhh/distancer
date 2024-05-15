const express = require("express");

const controller = "./../controllers/companyController.js";
const companyController = require(controller);

const router = express.Router();

// Routes
router
  .route("/")
  .get(companyController.getAllCompanies)
  .post(companyController.createCompany);
router
  .route("/:id")
  .get(companyController.getCompany)
  .patch(companyController.updateCompany)
  .delete(companyController.deleteCompany);

module.exports = router;
