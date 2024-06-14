const { join, extname } = require("path");
const sharp = require("sharp");
const { unlinkSync } = require("fs");

const imageResize = (req, res, next) => {
  if (!req.file) return next();
  const { filename, mimetype } = req.file;

  const fileTypes = /jpeg|jpg|png|gif/;
  const extName = fileTypes.test(extname(filename).toLowerCase());

  if (!extName) return next();

  const filePath = join(__dirname, "../", "uploads", filename);
  const uploadFilePath = join(
    __dirname,
    "../",
    "uploads",
    "uploaded-" + req.file.filename,
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
