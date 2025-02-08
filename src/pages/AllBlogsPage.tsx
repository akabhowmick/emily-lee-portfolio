import { SubPageTitle } from "../components/Shared/SubPageTitle";
import ReactPaginate from "react-paginate";
import { fullBlogPosts } from "../data/blogData";
import { BlogBanner } from "../components/Blog/BlogBanner";
import { allBlogsSubPageTitle } from "../data/pageTitle";
import { useState } from "react";

export const AllBlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5; // Number of posts per page

  // Calculate the current items to display
  const startOffset = currentPage * postsPerPage;
  const endOffset = startOffset + postsPerPage;
  const currentPosts = fullBlogPosts.slice(startOffset, endOffset);

  // Total page count
  const pageCount = Math.ceil(fullBlogPosts.length / postsPerPage);

  // Handle page change
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <SubPageTitle pageBannerInfo={allBlogsSubPageTitle} />
      <div className="flex flex-col gap-4 py-2 md:p-8">
        {currentPosts.map((post, index) => {
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
      {/* Pagination */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< Previous"
        containerClassName="flex justify-center gap-2 mt-8"
        pageClassName="px-3 py-1 border rounded bg-gray-100 text-black hover:bg-gray-200"
        activeClassName="bg-blue-500 text-white"
        nextClassName="px-3 py-1 border rounded bg-gray-100 text-black hover:bg-gray-200"
        previousClassName="px-3 py-1 border rounded bg-gray-100 text-black hover:bg-gray-200"
        disabledClassName="opacity-50 cursor-not-allowed"
        breakClassName="px-3 py-1 border rounded bg-gray-100 text-black hover:bg-gray-200"
      />
    </div>
  );
};
