import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
  Container,
  Link,
} from '@material-ui/core';
import Image from 'next/image';
import React, { cloneElement, CSSProperties, FC, ReactElement } from 'react';

const ElevationScroll: FC = ({ children }) => {
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
          <Container style={styles.container}>
            <Link href="/" color="inherit" underline="none" style={styles.link}>
              <Image
                src="/app-icon.svg"
                layout="fixed"
                width={48}
                height={48}
                quality={100}
                priority
              />
              <Typography variant="h6" style={styles.mainText}>
                Hanji
              </Typography>
            </Link>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">Open Source</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    marginLeft: 8,
    fontWeight: 600,
  },
};

export default ScrollAppBar;
