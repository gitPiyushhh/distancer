const ArduinoData = require('../models/AudrinoData');
const Company = require('../models/Company');
const Automobile = require('../models/Automobile');
const catchAsync = require('../utils/catchAsync');

// Route handlers
exports.getAllArduinoData = catchAsync(async (req, res) => {
  const arduinoData = await ArduinoData.find();
  res.status(200).json({
    status: 'success',
    results: arduinoData.length,
    data: {
      arduinoData,
    },
  });
});

exports.getArduinoData = catchAsync(async (req, res) => {
  const arduinoData = await ArduinoData.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      arduinoData,
    },
  });
});

exports.createArduinoData = catchAsync(async (req, res) => {
  const createdArduinoData = await ArduinoData.create(req.body);
  
  /*
    Additional logic for processing Arduino data
  */

  res.status(201).json({
    status: 'success',
    data: {
      arduinoData: createdArduinoData,
    },
  });
});

exports.updateArduinoData = catchAsync(async (req, res) => {
  const updatedArduinoData = await ArduinoData.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: 'success',
    data: {
      arduinoData: updatedArduinoData,
    },
  });
});

exports.deleteArduinoData = catchAsync(async (req, res) => {
  await ArduinoData.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
