const express = require("express");

const controller = "./../controllers/automobileController";
const automobileController = require(controller);

const router = express.Router();

// Routes
router
  .route("/")
  .get(automobileController.getAllAutomobiles)
  .post(automobileController.createAutomobile);
router
  .route("/:id")
  .get(automobileController.getAutomobile)
  .patch(automobileController.updateAutomobile)
  .delete(automobileController.deleteAutomobile);

module.exports = router;
