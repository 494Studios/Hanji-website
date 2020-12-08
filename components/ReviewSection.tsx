import {
  Box,
  Container,
  GridList,
  GridListTile,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import React, { FC } from 'react';
import ReviewCard from './ReviewCard';

const ReviewSection: FC = () => {
  const theme = useTheme();

  const matchedMed = useMediaQuery(theme.breakpoints.up('md'));
  const matchedSm = useMediaQuery(theme.breakpoints.up('sm'));

  let cols = 1;
  if (matchedMed) {
    cols = 3;
  } else if (matchedSm) {
    cols = 2;
  }

  return (
    <Box pt={16} pb={16} bgcolor="#F9F9F9">
      <Container>
        <Box mb={16}>
          <Typography variant="h3" align="center">
            Reviews
          </Typography>
        </Box>
        <GridList cols={cols} cellHeight="auto">
          {[1, 2, 3, 4, 5, 6].map((tile) => (
            <GridListTile key={tile}>
              <ReviewCard
                title="Great App"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                author="John Doe"
                source="Google Play"
                rating={5}
              />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </Box>
  );
};

export default ReviewSection;
