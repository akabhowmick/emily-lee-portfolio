import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { blogData } from "../../data/blogData";

// Define common styles
const style = {
  section: "py-12 bg-black sm:py-16 lg:py-20 xl:py-24",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  headerContainer: "max-w-3xl text-center lg:text-left",
  subtitle: "text-lg text-gray-400",
  title: "mt-6 text-3xl text-white sm:text-4xl lg:text-5xl xl:text-6xl",
  grid: "grid grid-cols-1 mt-12 gap-y-12 sm:gap-y-8 lg:gap-y-12 sm:mt-16 lg:mt-20 xl:mt-24", // full-width single column
  card: "relative group w-full", // Full width
  imageContainer: "overflow-hidden rounded-md aspect-w-16 aspect-h-9", // Make images take up the full width with a 16:9 aspect ratio
  image:
    "object-cover w-full h-full max-h-[300px] transition-all duration-200 group-hover:scale-110 group-hover:rotate-3",
  category: "mt-6 text-base text-gray-500",
  headline: "mt-3 text-xl text-white",
  linkContainer: "mt-6",
  link: "flex items-center text-gray-400",
  linkText: "w-32 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100",
  icon: "w-5 h-5 text-gray-400 transition-all duration-200 transform lg:-translate-x-32 lg:group-hover:translate-x-0",
};

export const Blogs = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <p className={style.subtitle}>Amet minim mollit non deserunt ullamco.</p>
          <h2 className={style.title}>Everything you need to know about me!</h2>
        </div>

        <div className={style.grid}>
          {blogData.map((article, index) => (
            <Link to={article.url} key={index} className={style.card}>
              <div className={style.imageContainer}>
                <img className={style.image} src={article.src} alt={article.alt} />
              </div>
              <p className={style.category}>{article.category}</p>
              <p className={style.headline}>{article.headline}</p>
              <div className={style.linkContainer}>
                <div className={style.link}>
                  <span className={style.linkText}>Read Full Article</span>
                  <LuChevronRight className={style.icon} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
