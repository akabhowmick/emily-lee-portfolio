import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", my: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="/">
        Angela Blogs!
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Container
        className="text-white"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: { sm: "center"},
        }}
      >
        <Box
          sx={{
            py: { xs: 2, sm: 2 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Copyright />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
