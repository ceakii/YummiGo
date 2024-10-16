import './App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function App() {
  return (
    <>
      <h1>
        <p>
          YummiGo!
        </p>
      </h1>

      <div id="nav">
        {BottomNav()}
      </div>
    </>
  )
}

function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Profile" />
        <BottomNavigationAction label="Recipes" />
        <BottomNavigationAction label="Adventure" />
        <BottomNavigationAction label="Quests" />
        <BottomNavigationAction label="Settings" />
      </BottomNavigation>
    </Box>
  );
}

export default App
