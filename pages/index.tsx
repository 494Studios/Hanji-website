import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Image from 'next/image';
import {
  ContentContainer,
  Header,
  HeroSection,
  ReviewSection,
  StyleSheet,
} from '@components';

const IndexPage = () => {
  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <HeroSection />
      <ContentContainer alt>
        <Grid item xs={12} md={6} style={styles.gridColumn}>
          <Header>Conjugation Info</Header>
          <Box mt={5} pb={16}>
            <Typography variant="body1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/screenshot.png" width={400} height={800} />
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid item xs={12} md={6} style={styles.gridColumn}>
          <Header>Conjugation Info</Header>
          <Box mt={5} pb={16}>
            <Typography variant="body1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/screenshot.png" width={400} height={800} />
        </Grid>
      </ContentContainer>
      <ContentContainer alt>
        <Grid item xs={12} md={6} style={styles.gridColumn}>
          <Header>Conjugation Info</Header>
          <Box mt={5} pb={16}>
            <Typography variant="body1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/screenshot.png" width={400} height={800} />
        </Grid>
      </ContentContainer>
      <ReviewSection />
    </div>
  );
};

const styles: StyleSheet = {
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export default IndexPage;
