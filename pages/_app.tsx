import React from 'react';
import App from 'next/app';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from '@mui/material';

// declare module '@mui/styles/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }

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
