import { Box, Container, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import WaitListForm from './WaitListForm';

const WaitListSection: FC = () => {
  return (
    <Box pt={16} pb={16} bgcolor="primary.main" color="white">
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Let’s stay in touch
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <WaitListForm onSubmit={() => {}} />
      </Container>
    </Box>
  );
};

export default WaitListSection;
