import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
import { StyleSheet } from '@components';
import { GitHub } from '@material-ui/icons';
import { Link, RichText, RichTextBlock } from 'prismic-reactjs';

export interface RepoCardProps {
  name: RichTextBlock[];
  description: RichTextBlock[];
  link: Link;
}

const RepoCard: FC<RepoCardProps> = ({ name, description, link }) => {
  return (
    <Box mr={2} mb={2} display="flex" alignSelf="stretch">
      <Card elevation={5} style={styles.card}>
        <CardContent style={styles.cardContent}>
          <Box display="flex" alignItems="center" mb={4}>
            <GitHub style={styles.icon} />
            <Typography variant="h4">{RichText.asText(name)}</Typography>
          </Box>
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ flexGrow: 1, marginBottom: 24 }}
          >
            {RichText.asText(description)}
          </Typography>
          {/* @ts-ignore */}
          <Button
            variant="text"
            href={link.url}
            target="_blank"
            style={{ alignSelf: 'flex-end' }}
          >
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
  icon: {
    marginRight: 16,
    fontSize: '2.5rem',
  },
};

export default RepoCard;
