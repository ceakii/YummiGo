import React from "react"
import { useContext } from 'react';
import { AppBar, Box, Button, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { Menu, MenuItem } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { barStyle, textTheme } from "../Style";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
    const topBarStyle = { ...barStyle, top: 0};
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/YummiGo/login');
    };

    // Handle logout menu
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/YummiGo/login');
    };

    return (
        <ThemeProvider theme={textTheme}>
            <Box sx={topBarStyle}>
                <AppBar sx={topBarStyle}>
                    <Toolbar>
                        {/* YummiGo App Name */}
                        <Typography
                            variant="h6"
                            align="left"
                            sx={{ flexGrow: 1 }}
                        >
                            YummiGo
                        </Typography>

                        {/* Display User Name and Logout Button */}
                        {user ? (
                            <>
                                <Button
                                    color="inherit"
                                    id="logoutButton"
                                    aria-controls={open ? 'logoutMenu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    onClick={handleMenuClick}
                                >
                                    <Typography
                                        variant="button"
                                        align="center"
                                        sx={{ flexGrow: 0, marginRight: 2 }}
                                    >
                                        {user}
                                    </Typography>
                                </Button>
                                <Menu
                                    id="logoutMenu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleMenuClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'logoutButton',
                                    }}
                                >
                                    <MenuItem onClick={handleLogoutClick}>
                                        <Typography
                                            variant="button"
                                            align="center"
                                            sx={{ flexGrow: 1 }}
                                        >
                                            Logout
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Button color="inherit" onClick={handleLoginClick}>
                                <Typography
                                    variant="button"
                                    align="center"
                                    sx={{ flexGrow: 1 }}
                                >
                                    Login
                                </Typography>
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}