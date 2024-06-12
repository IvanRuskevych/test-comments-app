const ctrlWrapper = (func) => {
  const fn = async (req, res, next) => {
    try {
      await func(req, res);
    } catch (err) {
      next(err);
    }
  };
  return fn;
};

module.exports = { ctrlWrapper };
