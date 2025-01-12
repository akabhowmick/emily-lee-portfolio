import { ArtPieceInterface } from "../../types/interfaces";
import blog15Image from "../../assets/Art_Pieces/Week_15.png";

export const blog15: ArtPieceInterface = {
  _id: "15",
  title: "",
  content: `Finished this colorful piece made entirely with colored pencils, inspired by my love for M&Ms, which is also the inspiration behind my nickname Em&Em’s.`,
  summary:
    "Finished this colorful piece made entirely with colored pencils, inspired by my love for M&Ms, which is also the inspiration behind my nickname Em&Em’s.",
  description:
    "Finished this colorful piece made entirely with colored pencils, inspired by my love for M&Ms, which is also the inspiration behind my nickname Em&Em’s.",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Colored Pencil Art".split(","),
  label: "Colored Pencil Art",
  imageUrl: blog15Image,
  link: "/blogs/week_15",
  readTime: "2 min read",
  date: "2025-01-31",
};
