const express = require("express")
const router = express.Router()
const pothole = require("../Controller/controller.js");

// Retrieve all laptimes
router.get("/", pothole.findAll);


module.exports = router