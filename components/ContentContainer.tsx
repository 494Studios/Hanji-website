import { Box, Container, Grid } from '@material-ui/core';
import React, { FC } from 'react';

const ContentContainer: FC<{ alt?: boolean }> = ({ children, alt }) => (
  <Box pt={16} pb={16} bgcolor={!alt && '#F9F9F9'}>
    <Container>
      <Grid container direction={alt ? 'row-reverse' : 'row'} spacing={10}>
        {children}
      </Grid>
    </Container>
  </Box>
);

export default ContentContainer;
