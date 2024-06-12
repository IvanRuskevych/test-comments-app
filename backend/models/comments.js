const sequelize = require("../sequelize/index.js");
const { DataTypes } = require("sequelize");

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    head_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "comments",
        key: "id",
      },
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    home_page: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    filename: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    tableName: "comments",
    timestamps: true,
  },
);

module.exports = Comment;
