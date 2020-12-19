import {
  Box,
  Container,
  GridList,
  GridListTile,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { Review } from 'prismic-configuration';
import React, { FC } from 'react';
import ReviewCard from './ReviewCard';

const useStyles = makeStyles({
  tile: { display: 'flex' },
});

const ReviewSection: FC<{ reviews: Review[] }> = ({ reviews }) => {
  const theme = useTheme();
  const classes = useStyles();

  const matchedMed = useMediaQuery(theme.breakpoints.up('md'));
  const matchedSm = useMediaQuery(theme.breakpoints.up('sm'));

  let cols = 1;
  if (matchedMed) {
    cols = 3;
  } else if (matchedSm) {
    cols = 2;
  }

  return (
    <Box pt={16} pb={16} bgcolor={grey[100]}>
      <Container>
        <Box mb={16}>
          <Typography variant="h3" align="center">
            Reviews
          </Typography>
        </Box>
        <GridList cols={cols} cellHeight="auto">
          {reviews.map((review, index) => (
            <GridListTile key={index} classes={{ tile: classes.tile }}>
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
