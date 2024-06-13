const Joi = require("joi");

const commentSchema = Joi.object().keys({
  head_id: Joi.number().integer(),
  user_name: Joi.string().required().messages({
    "any.required": "User Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  home_page: Joi.string().uri().optional().allow("").messages({
    "string.uri": "Invalid URL format",
  }),
  text: Joi.string().required().messages({
    "any.required": "Text is required",
  }),
});

module.exports = commentSchema;
