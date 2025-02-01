import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
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
        <ImageList cols={cols} rowHeight="auto">
          {reviews.map((review, index) => (
            <ImageListItem key={index} classes={{ standard: classes.tile }}>
              <ReviewCard
                title={review.title}
                description={review.description}
                author={review.author}
                source={review.source}
                rating={review.rating}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default ReviewSection;
