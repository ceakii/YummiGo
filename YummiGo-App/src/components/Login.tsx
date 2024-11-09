import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Box, Button, TextField, Typography, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { textTheme, buttonTheme } from '../Style';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'benjamin' && password === 'button') {
      login(username);
      navigate('/YummiGo/');
    } else {
      alert('Incorrect username or password');
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
            sx={{
              color: textTheme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: '#C67B58',
              },
              fontFamily: textTheme.typography.button.fontFamily,
              fontSize: textTheme.typography.button.fontSize,
              textShadow: textTheme.typography.button.textShadow,
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