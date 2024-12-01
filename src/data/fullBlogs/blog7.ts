import { ArtPieceInterface } from "../../types/interfaces";
import blog7Image from "../../assets/Art_Pieces/Week_7_Fish.png";

export const blog7: ArtPieceInterface = {
  _id: "week7",
  title: "The Fish",
  content: `Just finished this pop art piece inspired by my friend’s adorable cat, Calcifer! He’s a chunky, chirpy, and super friendly little guy with the cutest crispy meows, and the reason I fell in love with cats! I painted with acrylics to capture his playful spirit.`,
  summary:
    "Just finished this pop art piece inspired by my friend’s adorable cat, Calcifer! He’s a chunky, chirpy, and super friendly little guy with the cutest crispy meows, and the reason I fell in love with cats! I painted with acrylics to capture his playful spirit..",
  description:
    "Just finished this pop art piece inspired by my friend’s adorable cat, Calcifer! He’s a chunky, chirpy, and super friendly little guy with the cutest crispy meows, and the reason I fell in love with cats! I painted with acrylics to capture his playful spirit.",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Pop Art Piece".split(","),
  label: "Pop Art Piece",
  imageUrl: blog7Image,
  link: "/blogs/week7",
  readTime: "5 min read",
  date: "2027-11-29",
};
