import { ArtPieceInterface } from "../../types/interfaces";
import blog8Image from "../../assets/Art_Pieces/Week_8_Fish.png";

export const blog8: ArtPieceInterface = {
  _id: "week8",
  title: "The Fish",
  content: `The fish in this sculpture is gutted, with people emerging from it—symbolizing the impact of human pollution on the ocean. My message behind this piece was to convey that by polluting the seas, we're not only harming the fish, but also ourselves. This was made from air-dry clay with a glossy acrylic finish, this piece was a reflection on our shared responsibility for the environment.`,
  summary:
    "The fish in this sculpture is gutted, with people emerging from it—symbolizing the impact of human pollution on the ocean. My message behind this piece was to convey that by polluting the seas, we're not only harming the fish, but also ourselves. This was made from air-dry clay with a glossy acrylic finish, this piece was a reflection on our shared responsibility for the environment.",
  description:
    "The fish in this sculpture is gutted, with people emerging from it—symbolizing the impact of human pollution on the ocean. My message behind this piece was to convey that by polluting the seas, we're not only harming the fish, but also ourselves. This was made from air-dry clay with a glossy acrylic finish, this piece was a reflection on our shared responsibility for the environment.",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Sculpture".split(" "),
  label: "Sculpture",
  imageUrl: blog8Image,
  link: "/blogs/week8",
  readTime: "5 min read",
  date: "2028-11-22",
};
