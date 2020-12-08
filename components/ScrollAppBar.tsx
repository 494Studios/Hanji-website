import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
  Container,
} from '@material-ui/core';
import React, { cloneElement, FC, ReactElement } from 'react';

const ElevationScroll: FC = ({ children }) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children as ReactElement, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'basic' : 'primary',
    style: { backgroundColor: trigger ? 'white' : 'transparent' },
  });
};

const ScrollAppBar: FC = () => {
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Container style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Hanji
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">Open Source</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default ScrollAppBar;
