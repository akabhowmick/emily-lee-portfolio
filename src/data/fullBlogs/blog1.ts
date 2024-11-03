import { BlogInterface } from "../../types/interfaces";
import blog1image from "../../assets/classroom.png";

export const blog1: BlogInterface = {
  _id: "week1",
  title: "Week 1: Introduction to My Journey",
  summary: "An introduction to my passion for medicine and high school experiences.",
  cover: blog1image,
  content:
    "Hi! My name is Angela Tan , but you can call me Angela . I'm currently a 9th grader with a passion for medicine. Ever since I was young, I have been fascinated by how medical professionals make such a meaningful impact on people’s lives. I am excited to dive deeper into biology and start my journey towards becoming a doctor. Through this account, I will be sharing my experiences in high school and exploring the world of medicine. I hope to inspire and connect with others who share similar goals. Thanks for following along!",
  createdAt: "2024-10-25",
  author: {
    _id: "1",
    username: "Angela ",
  },
  tag: "Introduction",

  imageUrl: blog1image, 
  label: "Introduction",
  description: "An introduction to my passion for medicine and high school experiences.",
  link: "/blogs/week1",
  readTime: "3 min read",
  date: "2024-10-25",
};
