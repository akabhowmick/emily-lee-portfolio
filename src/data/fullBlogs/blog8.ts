import { ArtPieceInterface } from "../../types/interfaces";
import blog8Image from "../../assets/Art_Pieces/Week_8.png";

export const blog8: ArtPieceInterface = {
  _id: "week8",
  title: "Fashion",
  content: `As an ex-aspiring fashion designer and an avid candy lover, I brought this fun vision to life to combine some of my favorite things through watercolor and colored pencil.`,
  summary:
    "As an ex-aspiring fashion designer and an avid candy lover, I brought this fun vision to life to combine some of my favorite things through watercolor and colored pencil.",
  description:
    "As an ex-aspiring fashion designer and an avid candy lover, I brought this fun vision to life to combine some of my favorite things through watercolor and colored pencil.",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Watercolor".split(" "),
  label: "Watercolor",
  imageUrl: blog8Image,
  link: "/blogs/week8",
  readTime: "2 min read",
  date: "2028-12-12",
};
