import { useEffect, useState } from "react";
import { BlogPost } from "../components/BlogPost";
import { BlogPostInfo } from "../types/interfaces";

export default function IndexPage() {
  const [posts, setPosts] = useState<BlogPostInfo[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post._id}>
          <BlogPost post={post} />
        </div>
      ))}
    </div>
  );
}
