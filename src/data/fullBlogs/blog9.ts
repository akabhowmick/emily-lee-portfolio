import { ArtPieceInterface } from "../../types/interfaces";
import blog9Image from "../../assets/Art_Pieces/Week_9.png";

export const blog9: ArtPieceInterface = {
  _id: "week9",
  title: "Skeleton",
  content: `“Skeleton” was a drawing exercise my art teacher made us do. For this sketch I only used a charcoal stick and paper. I like this sketch very much because it was very fun to make and I find the monkey funny looking. I also had a 0.5 of my skeleton drawing`,
  summary:
    "“Skeleton” was a drawing exercise my art teacher made us do. For this sketch I only used a charcoal stick and paper. I like this sketch very much because it was very fun to make and I find the monkey funny looking. I also had a 0.5 of my skeleton drawing",
  description:
    "“Skeleton” was a drawing exercise my art teacher made us do. For this sketch I only used a charcoal stick and paper. I like this sketch very much because it was very fun to make and I find the monkey funny looking. I also had a 0.5 of my skeleton drawing",
  author: {
    _id: "1",
    username: "Emily",
  },
  tag: "Sketch".split(" "),
  label: "Sketch",
  imageUrl: blog9Image,
  link: "/blogs/week9",
  readTime: "2 min read",
  date: "2025-01-04",
};
