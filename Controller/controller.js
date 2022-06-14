const db = require("../Models/Pothole");
const { all } = require("../Routes/routes");
const Pothole = db.Pothole;
// Create and Save a new Tutorial

exports.create = (req, res) => {
    // Validate request
  
};

// Retrieve all potholes from the database.
exports.findAll = (req, res) => {
  Pothole.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Potholes."
      });
    })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
