import { SubPageTitle } from "../components/Shared/SubPageTitle";
import { fullBlogPosts } from "../data/blogData";
import { BlogBanner } from "../components/Blog/BlogBanner";
import { allBlogsSubPageTitle } from "../data/pageTitle";

export const AllBlogsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SubPageTitle pageBannerInfo={allBlogsSubPageTitle} />
      <div className="flex flex-col gap-4 p-8">
        {fullBlogPosts.map((post, index) => {
          return (
            <BlogBanner
              key={index}
              imageUrl={post.imageUrl}
              label={post.tag?.toString() || "General"}
              title={post.title}
              description={post.summary}
              link={`/blogs/${post._id}`}
              author={post.author.username}
              readTime={post.readTime}
            />
          );
        })}
      </div>
    </div>
  );
};
