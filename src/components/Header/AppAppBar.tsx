import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";

// Styling for the toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: "white",
  boxShadow: theme.shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  // Define navigation links
  const linksWithPaths = [
    { name: "Emily Lee", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "All Art Pieces", path: "/blogs" },
    { name: "Contact Me", path: "/contact" },
  ];

  // const logInOptions = [{ name: "Sign In", path: "/login" }];

  // Navigation Links rendered based on device type (mobile/desktop)
  const NavLinkButton = (menuType: string, link: { name: string; path: string }) => {
    const linkElement = (
      <Link to={link.path} key={link.name}>
        {menuType === "mobile" ? (
          <MenuItem>{link.name}</MenuItem>
        ) : (
          <Button variant="text" color="primary" size="medium" sx={{ minWidth: 64 }}>
            {link.name}
          </Button>
        )}
      </Link>
    );
    return linkElement;
  };

  // Refactored Login Box
  // const LogInBox = () => {
  //   return (
  //     <>
  //       {logInOptions.map((option) => (
  //         <Link to={option.path} key={option.name}>
  //           <MenuItem>
  //             <Button
  //               color="primary"
  //               variant={option.name === "Sign In" ? "outlined" : "contained"}
  //               fullWidth
  //             >
  //               {option.name}
  //             </Button>
  //           </MenuItem>
  //         </Link>
  //       ))}
  //     </>
  //   );
  // };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 3,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 0,
            }}
          >
            {/* Desktop Links */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {linksWithPaths.map((link) => NavLinkButton("not_mobile", link))}
            </Box>
          </Box>

          {/* Desktop Login Buttons */}
          {/* <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
            {userInfo?.username ? (
              <>
                <Button color="primary" variant="text" size="medium" onClick={logoutUser}>
                  Logout ({userInfo.username})
                </Button>
              </>
            ) : (
              LogInBox()
            )}
          </Box> */}

          {/* Mobile Menu */}
          <Box
            sx={{
              display: { sm: "flex", md: "none" },
              justifyContent: "center", // Centers the content horizontally
              alignItems: "center", // Centers the content vertically
            }}
          >
            <IconButton aria-label="Menu button" onClick={() => setOpen(true)} sx={{ ml: 2 }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <IconButton onClick={() => setOpen(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                {/* Mobile Links */}
                {linksWithPaths.map((link) => NavLinkButton("mobile", link))}
                {/* Mobile Login Box */}
                {/* {userInfo?.username ? (
                  <MenuItem>
                    <Button color="primary" variant="outlined" fullWidth onClick={logoutUser}>
                      Logout ({userInfo.username})
                    </Button>
                  </MenuItem>
                ) : (
                  LogInBox()
                )} */}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
