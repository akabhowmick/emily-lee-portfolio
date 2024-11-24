import { ArtPieceInterface } from "../../types/interfaces";
import blog6Image from "../../assets/Art_Pieces/Week_6_Fish.png";

export const blog6: ArtPieceInterface = {
  _id: "week6",
  title: "The Fish",
  summary:
    "The fish in this sculpture is gutted, with people emerging from it—symbolizing the impact of human pollution on the ocean. My message behind this piece was to convey that by polluting the seas, we're not only harming the fish, but also ourselves. This was made from air-dry clay with a glossy acrylic finish, this piece was a reflection on our shared responsibility for the environment.",
  content: `The fish in this sculpture is gutted, with people emerging from it—symbolizing the impact of human pollution on the ocean. My message behind this piece was to convey that by polluting the seas, we're not only harming the fish, but also ourselves. This was made from air-dry clay with a glossy acrylic finish, this piece was a reflection on our shared responsibility for the environment.`,
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Sculpture".split(" "),
  imageUrl: blog6Image,
  label: "Sculpture",
  description:
    "The fish in this sculpture is gutted, with people emerging from it—symbolizing the impact of human pollution on the ocean. My message behind this piece was to convey that by polluting the seas, we're not only harming the fish, but also ourselves. This was made from air-dry clay with a glossy acrylic finish, this piece was a reflection on our shared responsibility for the environment.",
  link: "/blogs/week6",
  readTime: "5 min read",
  date: "2026-11-22",
};
