import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SubPageTitle } from "../components/Shared/SubPageTitle";
import { contactMeSubPageTitle } from "../data/pageTitle";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/your@email.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        // Optionally reset the form or update the state
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SubPageTitle pageBannerInfo={contactMeSubPageTitle} />
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
          <Typography variant="h3" gutterBottom className="text-blue-600">
            Contact Me
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.message}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.message}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
            Send Message
          </Button>
        </Box>
      </Container>
    </div>
  );
};
