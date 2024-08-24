
import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import { Facebook,WhatsApp,Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // bgcolor: '', // Light green background color
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={4}>
          
        </Grid>
        <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <Link href="#" variant="body1" color="textSecondary">
            CeyncFuture
            </Link>
          </Grid>
          
        </Grid>
        <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <IconButton href="#" color="primary">
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="#" color="primary">
              <WhatsApp />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="#" color="primary">
              <Email />
            </IconButton>
          </Grid>
 
        </Grid>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 2 }}
        >
          © 2024. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;