const { Router } = require("express");
const { getCommentsAndRepliesById, addComment } = require("../controllers");
const { validateBody } = require("../middleware");
const { schemaComment } = require("../schema");

const router = Router();

router.get("/", getCommentsAndRepliesById);
router.post("/", validateBody(schemaComment), addComment);

module.exports = router;
