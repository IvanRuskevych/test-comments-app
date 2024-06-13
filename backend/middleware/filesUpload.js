const { diskStorage } = require("multer");
const { extname } = require("path");
const { httpError } = require("../helpers");
const multer = require("multer");
const { join } = require("node:path");

const storage = diskStorage({
  destination: join(__dirname, "../", "uploads"),
  // destination: (req, file, cb) => {
  //   cb(null, "uploads");
  // },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif|txt/;
  const mimeType = fileTypes.test(file.mimetype);
  const extName = fileTypes.test(extname(file.originalname).toLowerCase());

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    const error = httpError(400, "Unsupported file type");
    return cb(error);
  }
};

const limits = {
  fileSize: 100 * 1024, // 100Kb for .txt files
};

const filesUpload = multer({
  storage,
  limits,
  fileFilter,
});

module.exports = filesUpload;
