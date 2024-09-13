import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import { useUserContext } from "../providers/UserContext";
import { BlogPostInfo } from "../types/interfaces";

export default function BlogPostPage() {
  const [postInfo, setPostInfo] = useState<BlogPostInfo | null>(null);
  const { userInfo } = useUserContext();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [id]);

  if (!postInfo) return "";

  async function deletePost(postId: string) {
    const response = await fetch(`http://localhost:4000/post/${postId}`, {
      method: "DELETE",
      credentials: "include", // Ensure that cookies (for auth) are included
    });

    if (response.ok) {
      alert("Post deleted successfully");
      // Handle any post-deletion logic like refreshing the list of posts
    } else {
      alert("Failed to delete the post");
    }
  }

  return (
    <>
      <div className="post-page">
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className="author">by @{postInfo.author.username}</div>
        {userInfo.id === postInfo.author._id && (
          <div className="edit-row">
            <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit this post
            </Link>
            <Link className="delete-btn" to={`/`} onClick={() => deletePost(postInfo._id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-1.5 10.5A2.25 2.25 0 0115.75 21H8.25A2.25 2.25 0 015.5 19.5L4 9m5 0v6m5-6v6M10 4.5h4M6.75 4.5h10.5M8.25 4.5V3.75A1.5 1.5 0 019.75 2.25h4.5a1.5 1.5 0 011.5 1.5V4.5"
                />
              </svg>
              Delete this post
            </Link>
          </div>
        )}
        <div className="image">
          <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
    </>
  );
}
