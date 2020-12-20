import { Box, Container, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { FC } from 'react';

export interface ContentContainerProps {
  alt?: boolean;
  textLeft?: boolean;
  backgroundColor?: string;
}

const ContentContainer: FC<ContentContainerProps> = ({
  children,
  alt,
  backgroundColor,
  textLeft,
}) => (
  <Box pt={16} pb={16} bgcolor={backgroundColor ?? alt ? 'white' : grey[100]}>
    <Container>
      <Grid container direction={textLeft ? 'row-reverse' : 'row'} spacing={10}>
        {children}
      </Grid>
    </Container>
  </Box>
);

export default ContentContainer;
