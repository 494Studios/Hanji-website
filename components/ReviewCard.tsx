import React, { FC } from 'react';
import {
  Box,
  Card,
  CardContent,
  SvgIconProps,
  Typography,
} from '@material-ui/core';
import {
  StarHalfRounded,
  StarOutlineRounded,
  StarRounded,
} from '@material-ui/icons';
import { StyleSheet } from '@components';
import { RichText, RichTextBlock } from 'prismic-reactjs';

export interface ReviewCardProps {
  title: RichTextBlock[];
  description: RichTextBlock[];
  author: string;
  source: string;
  rating: number;
}

const ReviewCard: FC<ReviewCardProps> = ({
  title,
  description,
  author,
  source,
  rating,
}) => {
  const starList = [];
  while (starList.length < 5) {
    const starProps: SvgIconProps = {
      key: starList.length,
      fontSize: 'large',
      style: styles.star,
    };

    if (rating === 0.5) {
      starList.push(<StarHalfRounded {...starProps} />);
    } else if (rating > 0) {
      starList.push(<StarRounded {...starProps} />);
    } else {
      starList.push(<StarOutlineRounded {...starProps} />);
    }

    rating--;
  }

  return (
    <Box margin={2} display="flex" alignSelf="stretch">
      <Card elevation={5} style={styles.card}>
        <CardContent style={styles.cardContent}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            mb={5}
          >
            {starList}
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            {RichText.asText(title)}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            style={{ flexGrow: 1 }}
            gutterBottom
          >
            {RichText.asText(description)}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {`${author} via ${source}`}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const styles: StyleSheet = {
  star: {
    color: '#FFB400',
  },
  card: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'stretch',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

export default ReviewCard;
