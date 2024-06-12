const { Comment } = require("../models");
const { httpError, ctrlWrapper } = require("../helpers");

const getCommentsAndRepliesById = async (req, res) => {
  const { id } = req.body;

  const mainComment = await Comment.findOne({ where: { id } });

  if (!mainComment) {
    throw httpError(404, `Could not find comment with id: ${id}`);
  }

  const replies = await Comment.findAll({
    where: { head_id: id },
    order: [["createdAt", "DESC"]],
  });

  res.status(200).json({ mainComment, replies });
};

module.exports = {
  getCommentsAndRepliesById: ctrlWrapper(getCommentsAndRepliesById),
};
