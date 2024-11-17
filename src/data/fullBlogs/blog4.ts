import { ArtPieceInterface } from "../../types/interfaces";
import blog4Image from "../../assets/Art_Pieces/Week_4_Teddy.png";

export const blog4: ArtPieceInterface = {
  _id: "week4",
  title: "Exploring New Passions Through School Clubs",
  summary:
    "This was my first experience with Adobe Photoshop and I loved working on it because bears are special to me—my nickname is 곰 (bear in Korean). In my family, we each have our own bear: Dad’s a black bear, Mom’s a polar bear, I’m a brown bear, and my younger sister is a panda.",
  content: `This was my first experience with Adobe Photoshop and I loved working on it because bears are special to me—my nickname is 곰 (bear in Korean). In my family, we each have our own bear: Dad’s a black bear, Mom’s a polar bear, I’m a brown bear, and my younger sister is a panda.`,
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Extracurricular".split(" "),
  imageUrl: blog4Image,
  label: "Digital Art",
  description:
    "This was my first experience with Adobe Photoshop and I loved working on it because bears are special to me—my nickname is 곰 (bear in Korean). In my family, we each have our own bear: Dad’s a black bear, Mom’s a polar bear, I’m a brown bear, and my younger sister is a panda.",
  link: "/blogs/week4",
  readTime: "5 min read",
  date: "2024-11-04",
};
