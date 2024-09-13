import { FormEvent, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Editor } from "../components/Editor";

export default function EditBlogPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
    });
  }, [id]);


  async function updatePost(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id!);

    // Check if there is a file to upload
    if (files?.[0]) {
      data.set("file", files[0]);
    }

    // Send the PATCH request to update the post
    const response = await fetch(`http://localhost:4000/post/`, {
      method: "PATCH",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true); // Assuming this handles redirection after a successful update
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "5px" }}>Update post</button>
    </form>
  );
}
