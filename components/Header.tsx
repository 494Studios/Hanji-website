import { Box, Typography, useTheme } from '@material-ui/core';
import React, { FC } from 'react';

const Header: FC = ({ children }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h3">{children}</Typography>
      <div
        style={{
          width: '3rem',
          borderWidth: 3,
          borderColor: theme.palette.primary.main,
          borderRadius: 10,
          borderStyle: 'solid',
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
        }}
      />
    </Box>
  );
};

export default Header;
