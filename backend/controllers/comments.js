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

const addComment = async (req, res) => {
  const { user_name, email, home_page, text, head_id } = req.body;

  if (!user_name || !email || !text) {
    throw httpError(
      400,
      `"User Name", "Email" and "Text" are required fields.`,
    );
  }

  const newComment = await Comment.create({
    user_name,
    email,
    home_page,
    text,
    head_id,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.status(201).json(newComment);
};

module.exports = {
  getCommentsAndRepliesById: ctrlWrapper(getCommentsAndRepliesById),
  addComment: ctrlWrapper(addComment),
};
