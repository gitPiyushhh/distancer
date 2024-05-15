const express = require("express");

const controller = "./../controllers/audrinoController";
const audrinoController = require(controller);

const router = express.Router();

// Routes
router
  .route("/")
  .get(audrinoController.getAllArduinoData)
  .post(audrinoController.createArduinoData);
router
  .route("/:id")
  .get(audrinoController.getArduinoData)
  .patch(audrinoController.updateArduinoData)
  .delete(audrinoController.deleteArduinoData);

module.exports = router;
