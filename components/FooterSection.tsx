import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { FC } from 'react';

const FooterSection: FC = () => {
  return (
    <Box pt={8} pb={8} bgcolor={grey[100]}>
      <Container>
        <Typography variant="body2" color="textSecondary" component="div">
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Link color="inherit" href="mailto:494studios@gmail.com">
                Contact
              </Link>
            </Grid>
            <Grid item>
              <Link color="inherit" href="/privacy">
                Privacy Policy
              </Link>
            </Grid>
            <Grid item>
              <Link color="inherit" href="/terms">
                Terms &amp; Conditions
              </Link>
            </Grid>
            <Grid item>
              <Link color="inherit" href="/oss">
                Commitment to Open Source
              </Link>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterSection;
