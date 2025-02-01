import React from 'react';
import App from 'next/app';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material';
import { grey } from '@mui/material/colors';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    grey: true;
  }
}

declare module '@mui/material' {
  interface Color {
    main: string;
    dark: string;
    contrastText: string;
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    let theme = createTheme({
      palette: {
        primary: {
          main: '#3F51B5',
        },
        secondary: {
          main: '#F44336',
        },
        grey: {
          main: grey[300],
          dark: grey[400],
        },
      },
      typography: {
        fontFamily: [
          'Lato',
          'Roboto',
          '"Helevetica Neue"',
          'Arial',
          'sans-serif',
        ].join(','),
        h1: {
          fontSize: '2.5rem',
          fontWeight: 500,
        },
        h3: {
          fontWeight: 500,
        },
        h4: {
          fontWeight: 500,
        },
        body1: {
          fontSize: '1.25rem',
        },
      },
    });
    // Add styling for Join Waitlist button
    theme = createTheme(theme, {
      components: {
        MuiButton: {
          variants: [
            {
              props: { variant: 'contained', color: 'grey' },
              style: {
                color: theme.palette.getContrastText(theme.palette.grey[300]),
              },
            },
          ],
        },
      },
    });
    theme = responsiveFontSizes(theme);

    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}
