import { ArtPieceInterface } from "../../types/interfaces";
import blog1image from "../../assets/Art_Pieces/Week_1_Ballerina.png";

export const blog1: ArtPieceInterface = {
  _id: "week1",
  title: "Ballerina",
  summary:
    "This piece was the one with which for the first time I entered a competition and won High Merit. I’ve always loved ballerinas, and I wanted to capture a dreamy essence here. The ballerina is dancing on a pond, her skirt like a lily pad floating on the water. The colors in her dress start dark and fade into light, giving it a magical feel. Most surprisingly, this one acrylic piece also came together faster than most.",
  imageUrl: blog1image,
  content: `This piece was the one with which for the first time I entered a competition and won High Merit. I’ve always loved ballerinas, and I wanted to capture a dreamy essence here. The ballerina is dancing on a pond, her skirt like a lily pad floating on the water. The colors in her dress start dark and fade into light, giving it a magical feel. Most surprisingly, this one acrylic piece also came together faster than most.`,
  date: "2024-10-25",
  author: {
    _id: "1",
    username: "Emily ",
  },
  tag: "Acrylic".split(", "),
  label: "Acrylic",
  description:
    "This piece was the one with which for the first time I entered a competition and won High Merit. I’ve always loved ballerinas, and I wanted to capture a dreamy essence here. The ballerina is dancing on a pond, her skirt like a lily pad floating on the water. The colors in her dress start dark and fade into light, giving it a magical feel. Most surprisingly, this one acrylic piece also came together faster than most.",
  link: "/blogs/week1",
  readTime: "2 min read",
};
