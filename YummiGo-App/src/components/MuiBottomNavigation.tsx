import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function MuiBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate=useNavigate();

    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Profile"
                    onClick={() => navigate("/profile")}
                />
                <BottomNavigationAction
                    label="Recipe"
                    onClick={() => navigate("/recipe")}
                />
                <BottomNavigationAction
                    label="Adventure"
                    onClick={() => navigate("/")}
                />
                <BottomNavigationAction
                    label="Quest"
                    onClick={() => navigate("/quest")}
                />
                <BottomNavigationAction
                    label="Settings"
                    onClick={() => navigate("/settings")}
                />
            </BottomNavigation>
            </Box>
    );
}