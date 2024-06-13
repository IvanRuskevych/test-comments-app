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

  // checking for the existence of the headComment to write a replies to it
  if (head_id !== null) {
    const headComment = await Comment.findByPk(head_id);

    if (!headComment) {
      throw httpError(400, `Could not find comment with id: ${head_id}`);
    }
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
