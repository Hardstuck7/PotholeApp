const express = require("express")
const router = express.Router()
const pothole = require("../Controller/controller.js");

// Retrieve all potholes
router.get("/", pothole.findAll);


module.exports = router