const Company = require("../models/Company");
const catchAsync = require("../utils/catchAsync");

// Route handlers
exports.getAllCompanies = catchAsync(async (req, res) => {
  const companies = await Company.find();
  res.status(200).json({
    status: "success",
    results: companies.length,
    data: {
      companies,
    },
  });
});

exports.getCompany = catchAsync(async (req, res) => {
  const company = await Company.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      company,
    },
  });
});

exports.createCompany = catchAsync(async (req, res) => {
  const createdCompany = await Company.create(req.body);

  /*
    Additional logic for processing company data
  */

  res.status(201).json({
    status: "success",
    data: {
      company: createdCompany,
    },
  });
});

exports.updateCompany = catchAsync(async (req, res) => {
  const updatedCompany = await Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: {
      company: updatedCompany,
    },
  });
});

exports.deleteCompany = catchAsync(async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
