import { ArtPieceInterface } from "../../types/interfaces";
import blog13Image from "../../assets/Art_Pieces/Week_13.png";

export const blog13: ArtPieceInterface = {
  _id: "13",
  title: "Forest",
  content: `I made this forest drawing out of pastel sticks. I made this drawing because my family has always loved nature and going outside. My parents try to take me and my sister outside as much as possible, so we go on a lot of hikes and walks. `,
  summary:
    "I made this forest drawing out of pastel sticks. I made this drawing because my family has always loved nature and going outside. My parents try to take me and my sister outside as much as possible, so we go on a lot of hikes and walks. ",
  description:
    "I made this forest drawing out of pastel sticks. I made this drawing because my family has always loved nature and going outside. My parents try to take me and my sister outside as much as possible, so we go on a lot of hikes and walks. ",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Pastel Sticks.".split(" "),
  label: "Pastel Sticks.",
  imageUrl: blog13Image,
  link: "/blogs/week_13",
  readTime: "2 min read",
  date: "2025-01-15",
};
