import { ArtPieceInterface } from "../../types/interfaces";
import blog14Image from "../../assets/Art_Pieces/Week_14.png";

export const blog14: ArtPieceInterface = {
  _id: "14",
  title: "Screaming Girl",
  content: `“Screaming Girl” was a collage that was originally made for scholastics, but I didn’t end up adding in it after discussing it with my art teacher. I used a newspaper that talked about wars and activists to show why the girl was screaming. I used broken pieces of glass, a hot glue gun, a newspaper, and a characol stick. `,
  summary:
    "“Screaming Girl” was a collage that was originally made for scholastics, but I didn’t end up adding in it after discussing it with my art teacher. I used a newspaper that talked about wars and activists to show why the girl was screaming. I used broken pieces of glass, a hot glue gun, a newspaper, and a characol stick. ",
  description:
    "“Screaming Girl” was a collage that was originally made for scholastics, but I didn’t end up adding in it after discussing it with my art teacher. I used a newspaper that talked about wars and activists to show why the girl was screaming. I used broken pieces of glass, a hot glue gun, a newspaper, and a characol stick. ",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Collage".split(" "),
  label: "Collage",
  imageUrl: blog14Image,
  link: "/blogs/week_14",
  readTime: "6 min read",
  date: "2025-01-25",
};
