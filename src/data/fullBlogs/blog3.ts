import { ArtPieceInterface } from "../../types/interfaces";
import blog3image from "../../assets/Art_Pieces/Week_3_Clownhead.png";

export const blog3: ArtPieceInterface = {
  _id: "week3",
  title: "ClownHead",
  summary:
    "I initially aimed to create a head inspired by Tim Burton's Corpse Bride, but as it progressed, I wasn't satisfied and shifted my focus to crafting a scary clown. I envisioned a round clown nose, a jester hat, and to enhance its oddities, I added round balls as hair. To further achieve an unsettling effect, I intentionally left the skin rough and textured, avoiding any smoothing to amplify the eerie appearance.",
  content: `I initially aimed to create a head inspired by Tim Burton's Corpse Bride, but as it progressed, I wasn't satisfied and shifted my focus to crafting a scary clown. I envisioned a round clown nose, a jester hat, and to enhance its oddities, I added round balls as hair. To further achieve an unsettling effect, I intentionally left the skin rough and textured, avoiding any smoothing to amplify the eerie appearance.`,
  author: {
    _id: "1",
    username: "Emily ",
  },
  tag: "Sculpture".split(" "),
  imageUrl: blog3image,
  label: "Sculpture",
  description:
    "I initially aimed to create a head inspired by Tim Burton's Corpse Bride, but as it progressed, I wasn't satisfied and shifted my focus to crafting a scary clown. I envisioned a round clown nose, a jester hat, and to enhance its oddities, I added round balls as hair. To further achieve an unsettling effect, I intentionally left the skin rough and textured, avoiding any smoothing to amplify the eerie appearance.",
  link: "/blogs/week3",
  readTime: "5 min read",
  date: "2024-11-04",
};
