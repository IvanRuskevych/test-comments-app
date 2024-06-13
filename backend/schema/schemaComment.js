const Joi = require("joi");

const commentSchema = Joi.object().keys({
  head_id: Joi.number().integer(),
  user_name: Joi.string().max(50).required().messages({
    "string.max": "User Name must be no more than 50 characters",
    "any.required": "User Name is required",
  }),
  email: Joi.string().email().max(50).required().messages({
    "string.email": "Invalid email format",
    "string.max": "User Name must be no more than 50 characters",
    "any.required": "Email is required",
  }),
  home_page: Joi.string().uri().optional().allow("").max(500).messages({
    "string.uri": "Invalid URL format",
    "string.max": "URL must be no more than 500 characters",
  }),
  text: Joi.string().max(5000).required().messages({
    "string.max": "Text must be no more than 5000 characters",
    "any.required": "Text is required",
  }),
  file: Joi.string().max(500).messages({
    "string.max": "Path must be no more than 500 characters",
  }),
});

module.exports = commentSchema;
