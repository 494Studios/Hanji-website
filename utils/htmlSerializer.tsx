import React, { ReactNode } from 'react';
import { Elements, HTMLSerializer } from 'prismic-reactjs';
import { Link, Typography } from '@material-ui/core';

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer: HTMLSerializer<ReactNode> = (
  type,
  element,
  _content,
  children,
  key
) => {
  switch (type) {
    case Elements.heading4:
      return (
        <Typography variant="h4" key={key} style={styles.heading}>
          {children}
        </Typography>
      );
    case Elements.heading5:
      return (
        <Typography variant="h5" key={key} style={styles.heading}>
          {children}
        </Typography>
      );
    case Elements.heading6:
      return (
        <Typography variant="h6" key={key} style={styles.heading}>
          {children}
        </Typography>
      );

    case Elements.paragraph:
      return (
        <Typography variant="body1" key={key} style={styles.body} gutterBottom>
          {children}
        </Typography>
      );

    case Elements.hyperlink:
      return (
        <Link key={key} href={element.data?.url}>
          {children}
        </Link>
      );

    case Elements.listItem:
      return (
        <Typography variant="body1" key={key} style={styles.body}>
          &bull; {children}
        </Typography>
      );

    // Return null to stick with the default behavior
    default:
      return null;
  }
};

const styles = {
  heading: {
    marginTop: 32,
    marginBottom: 8,
  },
  body: { fontSize: '1rem' },
};

export default htmlSerializer;
