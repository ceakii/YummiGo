import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Alert, Box, Button, TextField, Typography, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { textTheme, buttonTheme } from '../Style';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Username and password cannot be empty');
      return;
    }

    // Check if username exists in localStorage
    const storedPassword = localStorage.getItem(`${username}_password`);

    if (storedPassword) {
      // If username exists, validate password
      if (storedPassword === password) {
        setErrorMessage('');
        localStorage.setItem('username', username);
        const initialCompletionStatuses = [false, false, false, false, false];
        localStorage.setItem(`${username}_completionStatuses`, JSON.stringify(initialCompletionStatuses));
        login(username);
        navigate('/YummiGo/');
      } else {
        // If password doesn't match
        setErrorMessage('Invalid username or password');
      }
    } else {
      // If username doesn't exist, create a new account
      localStorage.setItem(`${username}_password`, password); // Store password
      const initialCompletionStatuses = [false, false, false, false, false];
      localStorage.setItem(`${username}_completionStatuses`, JSON.stringify(initialCompletionStatuses));
      setErrorMessage('');
      login(username);
      navigate('/YummiGo/');
    }
  };

  return (
    <ThemeProvider theme={textTheme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#7dbf32',
        }}
      >
        <Box
          sx={{
            width: '400px',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#FEAF2F',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={textTheme.typography.h4}
          >
            Login to YummiGo
          </Typography>

          {errorMessage && (
            <Alert severity="error" sx={{ marginBottom: '20px' }}>
              {errorMessage}
            </Alert>
          )}

          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              marginBottom: '15px',
              backgroundColor: 'white',
              borderRadius: '5px',
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              marginBottom: '20px',
              backgroundColor: 'white',
              borderRadius: '5px',
            }}
          />
          <ThemeProvider theme={buttonTheme}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
              disabled={username.trim() === '' || password.trim() === ''}
              sx={{
                color: textTheme.palette.primary.contrastText,
                '&:hover': {
                  backgroundColor: '#C67B58',
                },
                fontFamily: textTheme.typography.button.fontFamily,
                fontSize: textTheme.typography.button.fontSize,
                textShadow: (username.trim() === '' || password.trim() === '') ? null : textTheme.typography.button.textShadow,
              }}
            >
              Submit
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;