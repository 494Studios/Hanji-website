import { Container, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleSheet } from '@components';

const HeroContent: FC = () => {
  return (
    <Container maxWidth="md" style={styles.container}>
      <Typography variant="h1" align="center">
        For Korean Learners, By Korean Learners
      </Typography>
    </Container>
  );
};

const styles: StyleSheet = {
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
};

export default HeroContent;
