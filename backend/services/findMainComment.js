const { Comment } = require("../models");
const { httpError } = require("../helpers");

const findMainComment = async (id) => {
  const comment = await Comment.findByPk(id);

  if (!comment) {
    throw httpError(404, `Could not find comment with id: ${id}`);
  }

  return comment;
};

module.exports = findMainComment;
