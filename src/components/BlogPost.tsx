import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import { BlogPostInfo } from "../types/interfaces";

export const BlogPost = ({ post }: { post: BlogPostInfo }) => {
  const { _id, title, summary, cover, content, createdAt, author } = post;

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
        <div>{content}</div>
      </div>
    </div>
  );
};
