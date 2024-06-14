const { extname } = require("path");

const checkFileSize = (file) => {
  const isTxtFile = extname(file.originalname).toLowerCase() === ".txt";
  const isTooLarge = isTxtFile && file.size > 100 * 1024;

  return isTooLarge;
};

const validateFileType = (file, types) => {
  const isValid = types.test(extname(file.originalname).toLowerCase());

  return isValid;
};

module.exports = { checkFileSize, validateFileType };
