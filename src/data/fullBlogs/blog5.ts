import { ArtPieceInterface } from "../../types/interfaces";
import blog5Image from "../../assets/Art_Pieces/Week_5_Snoopy.png";

export const blog5: ArtPieceInterface = {
  _id: "week5",
  title: "Snoopy",
  summary:
    "I like this digital painting I did of snoopy awhile ago because he is a childhood memory and I loved watching charlie brown when I was younger.",
  description:
    "I like this digital painting I did of snoopy awhile ago because he is a childhood memory and I loved watching charlie brown when I was younger.",
  content: `I like this digital painting I did of snoopy awhile ago because he is a childhood memory and I loved watching charlie brown when I was younger.`,
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Digital Art".split(" "),
  label: "Digital Art",
  imageUrl: blog5Image,
  link: "/blogs/week5",
  readTime: "5 min read",
  date: "2024-11-05",
};
