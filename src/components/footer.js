import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import { Facebook, WhatsApp, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
      }}
    >
      <Container maxWidth={false} sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Box md = {{m: 10}} >
          <IconButton href="#" color="primary">
            <Facebook sx={{ fontSize: 35 }}/>
          </IconButton>
          <IconButton href="#" color="primary">
            <WhatsApp sx={{ fontSize: 35 }} />
          </IconButton>
          <IconButton href="#" color="primary">
            <Email sx={{ fontSize: 35 }} />
          </IconButton>
        </Box>
        <span>
          © <a href="https://CeyncFuture.live">CeyncFuture</a> 2024. All rights
          reserved.
        </span>
      </Container>
    </Box>
  );
};

export default Footer;
