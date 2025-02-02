import { Box, Container, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { FC, ReactNode } from 'react';

export interface ContentContainerProps {
  alt?: boolean;
  children: ReactNode;
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
