import { Box, Container, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { FC } from 'react';

const ContentContainer: FC<{ alt?: boolean }> = ({ children, alt }) => (
  <Box pt={16} pb={16} bgcolor={alt ? 'white' : grey[100]}>
    <Container>
      <Grid container direction={alt ? 'row-reverse' : 'row'} spacing={10}>
        {children}
      </Grid>
    </Container>
  </Box>
);

export default ContentContainer;
