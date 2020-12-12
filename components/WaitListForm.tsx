import {
  Box,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import usePostEmail from 'hooks/usePostEmail';
import React, { FC, useEffect, useState } from 'react';

export interface WaitListProps {
  onSubmit: (name: string, email: string) => void;
}

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 1000px ${indigo[500]} inset`,
        WebkitTextFillColor: 'white',
      },
      '&:focus': {
        color: 'white',
      },
      color: indigo[300],
      backgroundColor: indigo[500],
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label': {
      color: indigo[300],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: indigo[300],
      },
      '&:hover fieldset': {
        borderColor: indigo[100],
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const WaitListForm: FC<WaitListProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { loading, success, doPost } = usePostEmail();

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(success !== null && !success);
  }, [success, loading]);

  return (
    <form>
      <Container>
        <Box
          alignContent="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          visibility={success ? 'hidden' : 'visible'}
          position="relative"
        >
          <Typography
            align="center"
            style={{
              position: 'absolute',
              top: '50%',
              visibility: success ? 'visible' : 'hidden',
            }}
          >
            You've been added to our waitlist! When we release on iOS, you'll be
            the first to know.
          </Typography>

          <CssTextField
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <CssTextField
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            disabled={!name || !email || loading}
            style={{ marginTop: 32, maxWidth: 300 }}
            disableElevation
            fullWidth
            onClick={() => {
              doPost();
            }}
          >
            {loading ? (
              <CircularProgress style={{ margin: 'auto' }} size="1.5rem" />
            ) : (
              'Submit'
            )}
          </Button>
        </Box>
      </Container>
      <Snackbar
        open={showError}
        autoHideDuration={5000}
        message="Couldn't add to waitlist. Please try again later"
        onClose={() => setShowError(false)}
      />
    </form>
  );
};

export default WaitListForm;
