import {
  AboutHeroContent,
  ContentContainer,
  FooterSection,
  Header,
  HeroSection,
  ScrollAppBar,
  StyleSheet,
} from '@components';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import Image from 'next/image';

const AboutPage: FC = () => {
  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <ScrollAppBar />
      <HeroSection>
        <AboutHeroContent />
      </HeroSection>
      <ContentContainer backgroundColor={'white'}>
        <Grid item xs={12} md={6} style={styles.centered}>
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
      <Box pt={16} pb={16}>
        <Container maxWidth="sm" style={styles.centered}>
          <Typography variant="h3" gutterBottom align="center">
            A 494 Studios Product
          </Typography>
          <Typography variant="body1" color="textSecondary" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box mt={8}>
            <Image
              src="/about-graphic.svg"
              width={508}
              height={408}
              quality={100}
            />
          </Box>
        </Container>
      </Box>
      <FooterSection />
    </div>
  );
};

const styles: StyleSheet = {
  centered: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
  },
};

export default AboutPage;
