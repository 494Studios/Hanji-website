import {
  Box,
  Container,
  GridList,
  GridListTile,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { Review } from 'prismic-configuration';
import React, { FC } from 'react';
import ReviewCard from './ReviewCard';

const ReviewSection: FC<{ reviews: Review[] }> = ({ reviews }) => {
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
          {reviews.map((review, index) => (
            <GridListTile key={index}>
              <ReviewCard
                title={review.title}
                description={review.description}
                author={review.author}
                source={review.source}
                rating={review.rating}
              />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </Box>
  );
};

export default ReviewSection;
