import { ContentContainer, Header, ScrollAppBar } from '@components';
import { Box, Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import Image from 'next/image';
import HeroSection from 'components/about/HeroSection';

const AboutPage: FC = () => {
  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <ScrollAppBar />
      <HeroSection />
      <ContentContainer backgroundColor={'white'}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Header>Our Story</Header>
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
          <Image src="/word-cloud.svg" width={655} height={655} quality={100} />
        </Grid>
      </ContentContainer>
    </div>
  );
};

export default AboutPage;
