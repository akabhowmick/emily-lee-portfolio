import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, PaletteMode } from "@mui/material/styles";
import MainContent from "./components/MainContent";
import Latest from "./components/Latest";
import Footer from "./components/Footer";

import getBlogTheme from "./theme/getBlogTheme";
import AppAppBar from "./components/AppAppBar";

export default function Blog() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const blogTheme = createTheme(getBlogTheme(mode));
  React.useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  return (
    <ThemeProvider theme={blogTheme}>
      <AppAppBar />
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
