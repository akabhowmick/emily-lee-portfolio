import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ArtPieceInterface } from "../../types/interfaces";

export const BlogPost = ({ post }: { post: ArtPieceInterface }) => {
  const { _id, title, summary, imageUrl, content,  date, author } = post;

  // Styled components to match the card styles
  const StyledCard = styled(Card)({
    border: "1px solid",
    borderColor: "divider",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  });

  const StyledCardContent = styled(CardContent)({
    padding: "16px",
  });

  const StyledTypography = styled(Typography)({
    marginBottom: "12px",
  });
  
  const paragraphs = content.split("//break").map((paragraph, index) => (
    <div key={index} className="content p-2">
      {paragraph.trim()} {/* Trim whitespace from each paragraph */}
    </div>
  ));

  return (
    <Grid size={{ xs: 12, md: 6 }} key={_id}>
      <StyledCard variant="outlined">
        <Link to={`/post/${_id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            alt={title}
            image={imageUrl}
            sx={{
              aspectRatio: "16 / 9",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          />
        </Link>
        <StyledCardContent>
          <Typography variant="caption" color="text.secondary">
            By {author.username} | <time>{formatISO9075(new Date( date))}</time>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to={`/post/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
              {title}
            </Link>
          </Typography>
          <StyledTypography variant="body2" color="text.secondary" gutterBottom>
            {summary}
          </StyledTypography>
          <div>{paragraphs}</div>
        </StyledCardContent>
      </StyledCard>
    </Grid>
  );
};
