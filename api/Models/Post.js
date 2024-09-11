import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100, // Optional: Limit title length
    },
    summary: {
      type: String,
      required: true,
      maxlength: 250, // Optional: Limit summary length
    },
    content: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true, // Make sure a cover image is provided
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, // Ensure the post has an author
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);

export default PostModel;
