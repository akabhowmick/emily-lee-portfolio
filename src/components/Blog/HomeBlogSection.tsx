import { recentBlogs } from "../../data/blogData";
import { BlogCard } from "./BlogCard";

// Main BlogSection component
export const HomeBlogSection = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 container">
      <div className="flex flex-wrap justify-center mx-auto">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
              My recent posts
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but the majority have
              suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      {/* Map through the blogs array to generate BlogCards */}
      <div className="flex sm:flex-wrap md:flex-nowrap gap-4 mx-auto justify-center">
        {recentBlogs.map((blog, index) => (
          <BlogCard
            key={index}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            link={blog.link}
          />
        ))}
      </div>
    </section>
  );
};
