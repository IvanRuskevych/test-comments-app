const multer = require("multer");
const { diskStorage } = require("multer");
const { join } = require("path");
const { httpError, checkFileSize, validateFileType } = require("../helpers");

const storage = diskStorage({
  destination: join(__dirname, "../", "uploads"),

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif|txt/;
  const isValidFileTYpe = validateFileType(file, fileTypes);
  const isTooLargeFileSize = checkFileSize(file);

  if (isValidFileTYpe) {
    if (isTooLargeFileSize) {
      const error = httpError(400, "Text file size exceeds 100KB");
      return cb(error);
    }
    return cb(null, true);
  } else {
    const error = httpError(400, "Unsupported file type");
    return cb(error);
  }
};

const filesUpload = multer({
  storage,
  fileFilter,
});

module.exports = filesUpload;
