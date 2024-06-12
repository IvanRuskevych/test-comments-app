const { Router } = require("express");
const { getCommentsAndRepliesById, addComment } = require("../controllers");

const router = Router();

router.get("/", getCommentsAndRepliesById);
router.post("/", addComment);

module.exports = router;
