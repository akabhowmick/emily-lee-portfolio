import { FormEvent, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const contactDetails = { name, email, message };
    const response = await fetch("http://localhost:4000/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Message sent successfully");
    } else {
      alert("Failed to send message");
    }
  }

  return (
    <Container maxWidth="sm" className="mt-8">
      <Box
        component="form"
        onSubmit={handleSubmit}
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
        <Typography variant="h4" component="h1" align="center">
          Contact Me
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
          Send Message
        </Button>
      </Box>
    </Container>
  );
};
