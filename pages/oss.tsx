import {
  ContentContainer,
  FooterSection,
  Header,
  HeroSection,
  ScrollAppBar,
  StyleSheet,
} from '@components';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { FC } from 'react';
import Image from 'next/image';

const OSSPage: FC = () => {
  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <ScrollAppBar />
      <HeroSection>
        <Container maxWidth="md" style={styles.container}>
          <Typography variant="h1" align="center">
            We Believe in Open Source Software
          </Typography>
        </Container>
      </HeroSection>
      <ContentContainer backgroundColor={'white'}>
        <Grid item xs={12} md={6} style={styles.centered}>
          <Header>Commitment to OSS</Header>
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
          <Image
            src="/oss-graphic.svg"
            width={500}
            height={380}
            quality={100}
          />
        </Grid>
      </ContentContainer>
      <Box pt={16} pb={16} bgcolor={grey[100]}>
        <Container>
          <Header>Source Code</Header>
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
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
};

export default OSSPage;
