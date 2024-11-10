import { BlogInterface } from "../../types/interfaces";
import blog2image from "../../assets/debate-image1.png";

export const blog2: BlogInterface = {
  _id: "week3",
  title: "Why I Chose Saint Francis Prep",
  summary:
    "Discovering a welcoming community, academic challenges, and exciting extracurriculars at Saint Francis Prep helped me choose this high school to start the next chapter of my life.",
  content: `When I was looking for the perfect high school, Saint Francis Prep truly captured my attention for several reasons. One of the standout features for me was its smaller student body. This cozy environment not only promises a close-knit community, but also a place where I can build strong relationships with both classmates and teachers. I was excited to find a school where I could really connect with others and feel like I belonged. 
  //break
  Another exciting aspect of Saint Francis Prep is its incredible variety of sports! With so many options available, I can dive into my passion for volleyball while also exploring new sports. Whether it’s basketball, soccer, or track and field, there’s always something to keep me active and engaged. What I love most is how the school encourages us to try new things, fostering a spirit of teamwork and camaraderie. I also love cheering on my friends at their games! Whether it’s the thrill of a basketball match or the excitement of a race, there’s always something to look forward to, even if I’m not the one playing. It’s such a great way to unwind and feel part of something bigger, all while supporting my classmates and celebrating their amazing talents.
  //break
  Plus, the extracurriculars at Saint Francis Prep are truly impressive! Being a college preparatory school, I know I’ll find the courses I need to thrive and get a sneak peek into college life. With plenty of AP classes available, I’m looking forward to challenging myself academically. I’m especially excited about the Z period classes that start before school—this semester, I’m taking a dance class. It’s the perfect way to combine my love for dance with earning extra high school credits, all while having a blast.
  //break
  In a nutshell, Saint Francis Prep has everything I was looking for in a high school. The smaller student body creates a warm environment where meaningful relationships can flourish. The array of sports lets me explore my athletic passions, while the exciting extracurriculars allow me to pursue activities I love, like dance, and even try new things. With the strong academic offerings, including AP and Z period classes, I feel ready to challenge myself and prepare for my future. All of these fantastic elements combined make Saint Francis Prep the perfect place for the next chapter of my life!`,
  author: {
    _id: "1",
    username: "Emily ",
  },
  tag: "Education".split(" "),
  imageUrl: blog2image,
  label: "Education",
  description:
    "Why I chose Saint Francis Prep to begin my high school journey, from a supportive community to dynamic academics and extracurriculars.",
  link: "/blogs/week2",
  readTime: "5 min read",
  date: "2024-10-30",
};
