import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleSheet } from '@components';
import { GitHub } from '@material-ui/icons';

export interface RepoCardProps {
  title: string;
  description: string;
  url: string;
}

const RepoCard: FC<RepoCardProps> = ({ title, description, url }) => {
  return (
    <Box mr={2} mb={2} display="flex" alignSelf="stretch">
      <Card elevation={5} style={styles.card}>
        <CardContent style={styles.cardContent}>
          <Box display="flex" alignItems="center" mb={3}>
            <GitHub style={{ marginRight: 8, fontSize: '2.5rem' }} />
            <Typography variant="h4">{title}</Typography>
          </Box>
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ flexGrow: 1 }}
            gutterBottom
          >
            {description}
          </Typography>
          <Button href={url} variant="text" style={{ alignSelf: 'flex-end' }}>
            See More
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

const styles: StyleSheet = {
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

export default RepoCard;
