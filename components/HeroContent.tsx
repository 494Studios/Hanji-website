import { Box, Grid, Typography, Button } from '@material-ui/core';
import React, { FC } from 'react';

const HeroContent: FC = () => {
  return (
    <Box mt={8}>
      <Grid container spacing={5} direction="column">
        <Grid item>
          <Typography variant="h1">Lorem Ipsum dolor sit amet</Typography>
          <Typography variant="body1" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Typography>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" size="large" fullWidth>
              Download Now
            </Button>
            <Box mt={5}>
              <Typography variant="h3" align="center">
                4.6
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary">
                Rating
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
            >
              Join Waitlist
            </Button>
            <Box mt={5}>
              <Typography variant="h3" align="center">
                10,000+
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary">
                Downloads
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroContent;
