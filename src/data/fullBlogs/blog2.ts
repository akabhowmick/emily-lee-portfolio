import { BlogInterface } from "../../types/interfaces";
import blog1image from "../../assets/classroom.png";

export const blog2: BlogInterface = {
  _id: "week2", // Replace with a unique identifier
  title: "Week 2: Why I Want to Become a Doctor",
  summary:
    "Discovering the importance of medicine and healthcare accessibility through family stories and personal experiences.",
  cover: blog1image,
  content: `I will never forget the day I eagerly awaited a family trip to the amusement park. I could already imagine the thrill of roller coasters and the sweet taste of cotton candy. But when my dad finally came home, he looked stressed. With a heavy sigh, he told us he had to cancel our plans because a patient urgently needed his help. I was devastated—my perfect day, ruined. Yet, later that evening, he sat me down and explained that the patient’s life had depended on him. That moment reshaped my understanding of his work. It wasn’t just about medicine; it was about prioritizing people’s lives. 
//break
Growing up with my mom, a pharmacist, and my dad, an internal medicine doctor in Korea, gave me early insight into the medical world. Watching my dad in the hospital filled me with fascination, especially when he shared stories like diagnosing a patient with stage 3 liver cancer. It dawned on me that doctors don’t just treat symptoms—they change lives. My parents never sugarcoated the reality of the medical field. They reminded me that medicine often involves sacrifice and constant challenges, like confronting loss and putting others’ well-being first. 
//break
Their honesty helped me see the weighty responsibilities that come with this profession. 
//break
Watching my aunt volunteer at a nursing home was another turning point. As a rehabilitation doctor, she worked tirelessly to help elderly patients regain strength and independence. I still remember how she celebrated when a patient, after much effort, took her first steps post-stroke. That moment showed me that medicine is about more than just healing the body; it’s about giving hope and lifting spirits. Witnessing her dedication to improving others’ quality of life inspired me deeply. 
//break
Today, nearly 5 billion people lack access to basic health services—a fact that fuels my drive to make healthcare more accessible. Investing in healthcare isn’t just a matter of policy; it’s about enhancing lives and building stronger communities. 
//break
As we strive to improve healthcare systems, I often wonder: What steps can we take today to ensure that every person receives the care they deserve? I envision a future where healthcare is universally accessible, supported by technology that makes it easy for everyone to reach the treatment and support they need, no matter where they are.`,
  createdAt: "2024-11-01", // Current date in ISO format
  author: {
    _id: "1",
    username: "Angela ",
  },
  tag: "Medicine, Healthcare, Family Inspiration",
  imageUrl: blog1image, // Add the URL for an image to be used in the post
  label: "Healthcare and Medicine",
  description:
    "Reflections on family, medicine, and the importance of accessible healthcare inspired by personal stories and a vision for the future.",
  link: "/blogs/week2", // Add the link for the blog post
  readTime: "5 minutes",
  date: "2024-10-25",
};
