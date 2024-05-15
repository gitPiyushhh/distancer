const Automobile = require("../models/Automobile");
const Company = require("../models/Company");
const catchAsync = require("../utils/catchAsync");

// Route handlers
exports.getAllAutomobiles = catchAsync(async (req, res) => {
  const automobiles = await Automobile.find();
  res.status(200).json({
    status: "success",
    results: automobiles.length,
    data: {
      automobiles,
    },
  });
});

exports.getAutomobile = catchAsync(async (req, res) => {
  const automobile = await Automobile.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      automobile,
    },
  });
});

exports.createAutomobile = catchAsync(async (req, res) => {
  const createdAutomobile = await Automobile.create(req.body);

  /*
    Additional logic for processing automobile data
  */

  res.status(201).json({
    status: "success",
    data: {
      automobile: createdAutomobile,
    },
  });
});

exports.updateAutomobile = catchAsync(async (req, res) => {
  const updatedAutomobile = await Automobile.findByIdAndUpdate(
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
      automobile: updatedAutomobile,
    },
  });
});

exports.deleteAutomobile = catchAsync(async (req, res) => {
  await Automobile.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
