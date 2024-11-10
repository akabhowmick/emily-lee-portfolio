import { BlogInterface } from "../../types/interfaces";
import blog1image from "../../assets/classroom.png";

export const blog1: BlogInterface = {
  _id: "week1",
  title: "An Introduction to My Journey",
  summary:
    "Starting high school with a passion for learning, I'm eager to explore new opportunities, champion debate, and document my journey through writing and shared experiences.",
  imageUrl: blog1image,
  content: `Hello, my name is Emily Lee, and I’m excited to share a bit about myself as I begin my high school journey. The variety of courses, programs, and wonderful extracurriculars offered at my school leave me eager to dive into new experiences and opportunities. One activity I’m particularly passionate about is debate, which has played a significant role in my growth throughout middle school.
  //break
  Debate has shaped my middle school years in ways I never expected. At first, I didn’t think I’d enjoy it, but now it’s a hobby I truly cherish. I love the thrill of collaborating with my teammates to craft compelling arguments. Through this experience, I’ve learned to think critically, listen actively, and express my thoughts with confidence. Working with my teammates not only sharpens our skills but also makes the process enjoyable. Our mentors often remind us that practice is key to mastering this challenging art.
  //break
  Although debate isn’t yet part of my high school, I’m excited about the possibility of introducing it and inspiring interest among my peers. I’ve discovered that debate is more than just arguing; it’s about building a community where we develop essential skills like communication and teamwork.
  //break
  I plan to use this platform to document my high school journey, sharing highlights from fun events, clubs, and my personal interests. Writing has always been a passion of mine, and I’m eager to express my ideas through this blog. I hope to capture my high school experiences so I can look back on them fondly in the future.
  `,
  date: "2024-10-25",
  author: {
    _id: "1",
    username: "Emily ",
  },
  tag: "Introduction".split(", "),
  label: "Introduction",
  description:
    "Starting high school with a passion for learning, I'm eager to explore new opportunities, champion debate, and document my journey through writing and shared experiences.",
  link: "/blogs/week1",
  readTime: "5 min read",
};
