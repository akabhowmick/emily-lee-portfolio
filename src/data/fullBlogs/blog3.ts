import { BlogInterface } from "../../types/interfaces";
import blog3image from "../../assets/debate-image2.png";

export const blog3: BlogInterface = {
  _id: "week3",
  title: "An Unforgettable Summer at ISSOS",
  summary:
    "My summer at ISSOS camp was filled with debate, fun competitions, and valuable mentorship that set me up for an exciting new school year.",
  content: `This summer was packed with excitement, learning, and adventure. I attended a camp called ISSOS, where I received valuable mentorship that helped strengthen my skills. It was an unforgettable few weeks of balancing academic growth with new experiences, making the most of every opportunity. 
    //break
    ISSOS is an international summer camp that gave me the chance to spend three weeks at Yale, creating memories I’ll cherish forever. Each morning, I learned something new in debate. During the first two weeks, I was introduced to a new form of debate: British Parliamentary. This style was quite different from what I was used to, especially the format and the number of teams debating at once. In British Parliamentary, I only had 15 minutes to prepare—a huge contrast from the preparation time in public forum debate. Although the time crunch was challenging, my peers helped me adapt. Through daily practice and competitive debates, I sharpened my skills. I didn’t make it to the final debate but was thrilled to be selected to host it. Watching the intense discussions unfold, I realized just how much we had all grown in such a short time.
    //break
    The camp wasn’t all about debating; each night, we had a different activity to look forward to. One of the best nights was when my group and I dressed our counselor as the Lorax for a fashion show. We prepared just a few hours beforehand, painting clothes orange to complete the look—and we ended up winning! Other evenings were packed with events that felt like something out of Harry Potter, with clan competitions and points earned through various challenges. On the first day, our counselors dressed as different characters to introduce the meaning of each clan, and we spent the camp competing to earn points. The final nights were packed with excitement, including the debate I hosted and a final dance at a club—a perfect ending to an unforgettable summer.
    //break
    Beyond camp, I also received mentorship to ensure a strong start to the school year. Doing well in school is very important to me, and with help from my peers, I got a head start on learning some of the material I’ll encounter in the upcoming year.
    //break
    My summer of 2024 was truly one of the most unforgettable yet.`,
  author: {
    _id: "1",
    username: "Emily ",
  },
  tag: "Extracurricular".split(" "),
  imageUrl: blog3image,
  label: "Extracurricular",
  description:
    "Reflecting on a transformative summer at ISSOS camp, filled with British Parliamentary debate, thrilling competitions, and memorable moments.",
  link: "/blogs/week3",
  readTime: "5 min read",
  date: "2024-11-04",
};
