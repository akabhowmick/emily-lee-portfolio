import { ArtPieceInterface } from "../../types/interfaces";
import blog11Image from "../../assets/Art_Pieces/Week_11.png";

export const blog11: ArtPieceInterface = {
  _id: "week11",
  title: "Me in Space",
  content: `This drawing was another piece for my high school portfolio. I used soft pastels and color pencils. I am in space with my middle school laptop because I would rather have fun than study. `,
  summary:
    "This drawing was another piece for my high school portfolio. I used soft pastels and color pencils. I am in space with my middle school laptop because I would rather have fun than study. ",
  description:
    "This drawing was another piece for my high school portfolio. I used soft pastels and color pencils. I am in space with my middle school laptop because I would rather have fun than study. ",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Soft Pastels, Color Pencils".split(","),
  label: "Soft Pastels, Color Pencils",
  imageUrl: blog11Image,
  link: "/blogs/week11",
  readTime: "2 min read",
  date: "2025-01-",
};
