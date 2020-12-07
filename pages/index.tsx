import React from 'react';
import { Grid } from '@material-ui/core';
import Image from 'next/image';
import { ContentContainer, HeroSection } from '@components';

const IndexPage = () => {
  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <HeroSection />
      <ContentContainer>
        <Grid item xs={6}>
          <Image src="/screenshot.png" width={400} height={800} />
        </Grid>
        <Grid item xs={6}>
          hoh
        </Grid>
      </ContentContainer>
    </div>
  );
};

export default IndexPage;
