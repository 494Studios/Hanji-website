import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import Image from 'next/image';
import HeroContent from '@components/HeroContent';

const IndexPage = () => {
  return (
    <Box mt={8}>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <HeroContent />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src="/hero-graphic.svg"
              width={511}
              height={648}
              quality={100}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IndexPage;
