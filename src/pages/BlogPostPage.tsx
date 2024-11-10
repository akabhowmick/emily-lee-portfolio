import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtPieceInterface } from "../types/interfaces";
import { authorData, fullBlogPosts } from "../data/blogData";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

export default function BlogPostPage() {
  const [postInfo, setPostInfo] = useState<ArtPieceInterface | null | undefined>(null);
  const { id } = useParams();
  useEffect(() => {
    setPostInfo(fullBlogPosts.find((postInfo) => postInfo._id === id));
  }, [id]);

  if (!postInfo) return "";

  const socialLinks = [
    {
      href: "/",
      label: "Instagram",
      icon: <FaInstagram className="w-4 h-4 fill-current" />,
    },
    {
      href: "/",
      label: "Youtube",
      icon: <FaYoutube className="w-4 h-4 fill-current" />,
    },
    {
      href: "/",
      label: "TikTok",
      icon: <FaTiktok className="w-4 h-4 fill-current" />,
    },
  ];

  const { title, author, date, content, tag, imageUrl } = postInfo;

  const paragraphs = content.split("//break").map((paragraph, index) => (
    <p key={index} className="content p-2">
      {paragraph.trim()}
    </p>
  ));

  return (
    <article className="max-w-5xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
      <div className="w-full mx-auto space-y-4 text-center">
        <p className="text-xs font-semibold tracking-wider uppercase">{tag}</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="text-sm dark:text-gray-600">
          By <span itemProp="name">{author.username} </span>
          on <time dateTime={date}>{date}</time>
        </p>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <img src={imageUrl} alt="blog-post-image" />
      </div>
      <div className="dark:text-gray-800 px-4">{paragraphs}</div>
      <div className="pt-12 border-t dark:border-gray-300">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src={authorData.authorImage}
            alt="Image of author"
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">{author.username}</h4>
            <p className="dark:text-gray-600">{authorData.authorDescription}</p>
          </div>
        </div>
        <div className="flex justify-center pt-4 space-x-4 align-center">
          {socialLinks &&
            socialLinks.map((link, index) => (
              <a
                key={index}
                rel="noopener noreferrer"
                href={link.href}
                aria-label={link.label}
                className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              >
                {link.icon}
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
