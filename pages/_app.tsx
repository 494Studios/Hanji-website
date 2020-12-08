import React from 'react';
import App from 'next/app';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    let theme = createMuiTheme({
      typography: {
        h1: {
          fontSize: '5rem',
          fontWeight: 500,
        },
        h3: {
          fontWeight: 500,
        },
        h4: {
          fontWeight: 500,
        },
        body1: {
          fontSize: '1.5rem',
        },
      },
    });
    theme = responsiveFontSizes(theme);

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
