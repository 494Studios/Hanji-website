import { Box, Container, Grid } from '@material-ui/core';
import React, { FC } from 'react';

const ContentContainer: FC = ({ children }) => (
  <Box pt={16}>
    <Container>
      <Grid container>{children}</Grid>
    </Container>
  </Box>
);

export default ContentContainer;
