const { httpError } = require("../helpers");

const validateBody = (schema) => {
  const fn = (req, _, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      next(httpError(400, error.message));
    }
    next();
  };

  return fn;
};

module.exports = validateBody;
