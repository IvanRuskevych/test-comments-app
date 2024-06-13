const { Comment } = require("../models");
const { ctrlWrapper } = require("../helpers");
const { findMainComment } = require("../services");

const getCommentsAndRepliesById = async (req, res) => {
  const { id } = req.body;

  const mainComment = await findMainComment(id);

  const replies = await Comment.findAll({
    where: { head_id: id },
    order: [["createdAt", "DESC"]],
  });

  res.status(200).json({ mainComment, replies });
};

const addComment = async (req, res) => {
  const { user_name, email, home_page, text, head_id, file } = req.body;

  // checking for the existence of the headComment to write a replies to it
  if (head_id) {
    await findMainComment(head_id);
  }

  const newComment = await Comment.create({
    user_name,
    email,
    home_page,
    text,
    head_id,
    file,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.status(201).json(newComment);
};

module.exports = {
  getCommentsAndRepliesById: ctrlWrapper(getCommentsAndRepliesById),
  addComment: ctrlWrapper(addComment),
};
