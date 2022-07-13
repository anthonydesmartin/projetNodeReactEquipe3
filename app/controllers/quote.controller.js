const db = require("../models");
const Quote = db.quotes;
const Op = db.Sequelize.Op;

// Create and Save a new Quote
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Quote
  const quote = {
    status: req.body.status ? req.body.status : "pending", // enum "hacker", "dealer", "Godfather"
  };

  // Save Quote in the database
  Quote.create(quote)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the quote.",
      });
    });
};

// Retrieve all Quotes from the database.
exports.findAll = (req, res) => {
  const query_status = req.body.status;
  var condition = query_status ? { query_status: { [Op.like]: `%${query_status}%` } } : null;

  Quote.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving quotes.",
      });
    });
};

// Find a single Quote with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Quote.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Quote with id=" + id,
      });
    });
};

// Update a Quote by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Quote.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Quote was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update quote with id=${id}. Maybe quote was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating quote with id=" + id,
      });
    });
};

// Delete a Quote with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Quote.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Quote was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete quote with id=${id}. Maybe quote was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete quote with id=" + id,
      });
    });
};

// Delete all Quotes from the database.
exports.deleteAll = (req, res) => {
  Quote.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Quotes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all quote.",
      });
    });
};
