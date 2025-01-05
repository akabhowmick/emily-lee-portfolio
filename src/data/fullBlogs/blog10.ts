import { ArtPieceInterface } from "../../types/interfaces";
import blog10Image from "../../assets/Art_Pieces/Week_10.png";

export const blog10: ArtPieceInterface = {
  _id: "week10",
  title: "Phone Addiction",
  content: `My “Phone Addiction” piece is made from soft pastels and I created this piece to show that everyone is obsessed with likes and fame. The girl horrifyingly looks at her phone and looks like she is about to go insane due to the likes/fame she is receiving. This was a piece I made for a competition. `,
  summary:
    "My “Phone Addiction” piece is made from soft pastels and I created this piece to show that everyone is obsessed with likes and fame. The girl horrifyingly looks at her phone and looks like she is about to go insane due to the likes/fame she is receiving. This was a piece I made for a competition. ",
  description:
    "My “Phone Addiction” piece is made from soft pastels and I created this piece to show that everyone is obsessed with likes and fame. The girl horrifyingly looks at her phone and looks like she is about to go insane due to the likes/fame she is receiving. This was a piece I made for a competition. ",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Soft Pastels".split("  "),
  label: "Soft Pastels",
  imageUrl: blog10Image,
  link: "/blogs/week10",
  readTime: "2 min read",
  date: "2025-01-11",
};
