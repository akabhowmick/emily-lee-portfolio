import { useEffect, useState } from "react";
import { BlogPost } from "../components/BlogPost";
import { BlogPostInfo } from "../types/interfaces";
import "../App.css";
import { Typography, Button, Container, Grid2 } from "@mui/material";

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
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="text-center py-20 ">
          <Container>
            <Typography variant="h2" component="h1" className="font-bold text-4xl mb-4">
              Welcome to my Blog!
            </Typography>
            <Typography variant="body1" className="text-lg text-gray-600 mb-6">
              Discover, share, and engage with meaningful stories.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Start Reading
            </Button>
          </Container>
        </div>

        {/* Featured Articles Section */}
        <Container className="py-20">
          <Typography variant="h4" component="h2" className="font-bold text-3xl text-center mb-10">
            Featured Articles
          </Typography>
          <Grid2 container spacing={4}>
            {/* Article Card */}
            <div className="posts">
              {posts.map((post) => (
                <div key={post._id}>
                  <BlogPost post={post} />
                </div>
              ))}
            </div>
          </Grid2>
        </Container>
      </div>
    </>
  );
}
