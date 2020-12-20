import { ContentContainer, Header, StyleSheet } from '@components';
import { Box, Grid, Typography } from '@material-ui/core';
import { HomePageSection } from 'prismic-configuration';
import React, { FC } from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';

export interface SlicesProps {
  slices: HomePageSection[];
}

const Slices: FC<SlicesProps> = ({ slices }) => {
  return (
    <>
      {slices.map(({ header, description, graphic }, index) => (
        <ContentContainer alt={index % 2 === 0} key={index}>
          <Grid item xs={12} md={6} style={styles.gridColumn}>
            <Header>{RichText.asText(header)}</Header>
            <Box mt={5} pb={16}>
              <Typography variant="body1" color="textSecondary">
                {RichText.asText(description)}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={graphic.url}
              width={graphic.dimensions.width}
              height={graphic.dimensions.height}
            />
          </Grid>
        </ContentContainer>
      ))}
    </>
  );
};

const styles: StyleSheet = {
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export default Slices;
