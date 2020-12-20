import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
  Container,
  Link,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image';
import React, { cloneElement, CSSProperties, FC, ReactElement } from 'react';

const ElevationScroll: FC = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children as ReactElement, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'default' : 'primary',
    style: { backgroundColor: trigger ? 'white' : 'transparent' },
  });
};

const ScrollAppBar: FC = () => {
  const theme = useTheme();
  const showFull = useMediaQuery(theme.breakpoints.up('sm'));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => setAnchorEl(null);

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
            {showFull ? (
              <>
                <Button color="inherit" href="/about">
                  About
                </Button>
                <Button color="inherit" href="/oss">
                  Open Source
                </Button>
              </>
            ) : (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu"
                  anchorEl={anchorEl}
                  open={!!anchorEl}
                  onClose={handleClose}
                  keepMounted
                >
                  <Link href="/about" color="inherit" underline="none">
                    <MenuItem onClick={handleClose}>About</MenuItem>
                  </Link>
                  <Link href="/oss" color="inherit" underline="none">
                    <MenuItem onClick={handleClose}>Open Source</MenuItem>
                  </Link>
                </Menu>
              </>
            )}
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
