const { Router } = require("express");
const { getCommentsAndRepliesById, addComment } = require("../controllers");
const { validateBody, filesUpload } = require("../middleware");
const { schemaComment } = require("../schema");

const router = Router();

router.get("/", getCommentsAndRepliesById);
router.post(
  "/",
  filesUpload.single("file"),
  validateBody(schemaComment),
  addComment,
);

module.exports = router;
