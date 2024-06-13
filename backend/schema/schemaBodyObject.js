const Joi = require("joi");

// validate for missing body object
const schemaBodyObject = Joi.object()
  .min(1)
  .required()
  .messages({ "object.min": "Missing fields" });

module.exports = schemaBodyObject;
