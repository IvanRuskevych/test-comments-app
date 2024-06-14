const sharp = require("sharp");
const { join } = require("path");
const { unlinkSync } = require("fs");
const { validateFileType } = require("../helpers");

const imageResize = (req, res, next) => {
  if (!req.file) return next();

  const { filename } = req.file;
  const fileTypes = /jpeg|jpg|png|gif/;
  const isValidFileTYpe = validateFileType(req.file, fileTypes);

  if (!isValidFileTYpe) return next();

  const filePath = join(__dirname, "../", "uploads", filename);
  const uploadFilePath = join(
    __dirname,
    "../",
    "uploads",
    "uploaded__" + req.file.filename,
  );

  sharp(filePath)
    .resize(320, 240, {
      fit: "contain",
    })
    .toFile(uploadFilePath, (err) => {
      if (err) return next(err);

      req.file.path = uploadFilePath;
      unlinkSync(filePath);

      next();
    });
};

module.exports = imageResize;
