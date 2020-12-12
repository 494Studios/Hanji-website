import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { FC } from 'react';

const FooterSection: FC = () => {
  return (
    <Box pt={8} pb={8} bgcolor={grey[100]}>
      <Container>
        <Typography variant="body2" color="textSecondary">
          <Grid container spacing={3} justify="center">
            <Grid item>
              <Link color="inherit" href="#">
                Privacy Policy
              </Link>
            </Grid>
            <Grid item>
              <Link color="inherit" href="#">
                Terms &amp; Conditions
              </Link>
            </Grid>
            <Grid item>
              <Link color="inherit" href="#">
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
