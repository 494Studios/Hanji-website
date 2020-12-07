import React from 'react';
import { Grid } from '@material-ui/core';
import Image from 'next/image';
import { ContentContainer, HeroSection } from '@components';

const IndexPage = () => {
  return (
    <div style={{ overflowX: 'hidden', margin: -8 }}>
      <HeroSection />
      <ContentContainer alt>
        <Grid item xs={12} sm={6}>
          hoh
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image src="/screenshot.png" width={400} height={800} />
        </Grid>
      </ContentContainer>
      <ContentContainer>
        <Grid item xs={12} sm={6}>
          hoh
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image src="/screenshot.png" width={400} height={800} />
        </Grid>
      </ContentContainer>
    </div>
  );
};

export default IndexPage;
