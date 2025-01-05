import { ArtPieceInterface } from "../../types/interfaces";
import blog12Image from "../../assets/Art_Pieces/Week_12.png";

export const blog12: ArtPieceInterface = {
  _id: "week12",
  title: "Lily of the Valley",
  content: `This watercolor painting was for the memory part of my high school portfolio. I did Lily of the Valley because at the time it was my favorite flower and I had recently seen it in Korea. The flower is originally white, but I wanted to make it pop, so I decided to use bright colors to paint it. I used watercolor for this piece.`,
  summary:
    "This watercolor painting was for the memory part of my high school portfolio. I did Lily of the Valley because at the time it was my favorite flower and I had recently seen it in Korea. The flower is originally white, but I wanted to make it pop, so I decided to use bright colors to paint it. I used watercolor for this piece.",
  description:
    "This watercolor painting was for the memory part of my high school portfolio. I did Lily of the Valley because at the time it was my favorite flower and I had recently seen it in Korea. The flower is originally white, but I wanted to make it pop, so I decided to use bright colors to paint it. I used watercolor for this piece.",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Watercolor".split(","),
  label: "Watercolor",
  imageUrl: blog12Image,
  link: "/blogs/week12",
  readTime: "2 min read",
  date: "2025-01-18",
};
