import React, { FC } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import Image from 'next/image';
import { HeroContent, StyleSheet } from '@components';

const HeroSection: FC = () => (
  <>
    <Box pt={8} bgcolor="#F3F5FE">
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <HeroContent />
          </Grid>
          <Grid item xs={12} md={6} style={styles.gridColumn}>
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
    <div style={styles.endWave}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: '100%', width: '100%' }}
      >
        <path
          d="M-3.10,93.25 C149.99,150.00 271.49,-49.98 501.41,94.23 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: 'none', fill: '#F3F5FE' }}
        />
      </svg>
    </div>
  </>
);

const styles: StyleSheet = {
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  endWave: {
    height: 150,
    overflow: 'hidden',
  },
};

export default HeroSection;
