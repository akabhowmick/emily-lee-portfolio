import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { cardData } from "./cardData";
import { StyledTypography, StyledCard, StyledCardContent, Author } from "./SharedMUIStyles";

export function Search() {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "25ch" } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  //const [filterChips, setFilterChips] = React.useState<string[]>([]);

  const chipOptions = ["General", "Volunteering", "Debate", "Extracurricular", "College Prep"];

  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info("You clicked the filter chip.");
  };

  const mainContentCards = cardData.map((cardInfo) => {
    return (
      <Grid size={{ xs: 12, md: 6 }} key={cardInfo.title}>
        <StyledCard
          variant="outlined"
          onFocus={() => handleFocus(1)}
          onBlur={handleBlur}
          tabIndex={0}
          className={focusedCardIndex === 1 ? "Mui-focused" : ""}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={cardInfo.img}
            aspect-ratio="16 / 9"
            sx={{
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          />
          <StyledCardContent>
            <Typography gutterBottom variant="caption" component="div">
              {cardInfo.tag}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {cardInfo.title}
            </Typography>
            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
              {cardInfo.description}
            </StyledTypography>
          </StyledCardContent>
          <Author author={cardInfo.author} />
        </StyledCard>
      </Grid>
    );
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Angela's Blog
        </Typography>
      </div>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          gap: 1,
          width: { xs: "100%", md: "fit-content" },
          overflow: "auto",
        }}
      >
        <Search />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          gap: 4,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "row",
            gap: 3,
            overflow: "auto",
          }}
        >
          {chipOptions.map((chip) => {
            return (
              <Chip
                key={chip}
                size="medium"
                label={chip}
                onClick={handleClick}
                onMouseLeave={handleBlur}
                // sx={{
                //   backgroundColor:
                //     chip === focusedChip? '#f5f5f5' : 'transparent',
                //   border: chip === focusedChip? '1px solid #e6e6e6' : 'none',
                // }}
              />
            );
          })}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Search />
        </Box>
      </Box>
      <Grid container spacing={2} columns={12}>
        {mainContentCards}
      </Grid>
    </Box>
  );
}
