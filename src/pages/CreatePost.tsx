import "react-quill/dist/quill.snow.css";
import { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { Editor } from "../components/Editor";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    if (files) data.set("file", files[0]);

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="md" className="mt-8">
      <Box
        component="form"
        onSubmit={createNewPost}
        className="p-6 w-full text-blue-700 "
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h3" gutterBottom className="text-blue-600">
          Create a New Post
        </Typography>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Summary"
          fullWidth
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <input type="file" onChange={(e) => setFiles(e.target.files)} className="my-3" />
        <Editor value={content} onChange={setContent} />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Create Post
        </Button>
      </Box>
    </Container>
  );
}
