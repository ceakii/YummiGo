import { useContext } from 'react';
import { AppBar, Box, Button, ThemeProvider, Toolbar, Typography } from "@mui/material";
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

    const handleLogoutClick = () => {
        logout();
    };

    return (
        <ThemeProvider theme={textTheme}>
            <Box sx={topBarStyle}>
                <AppBar sx={topBarStyle}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            align="left"
                            sx={{ flexGrow: 1 }}
                        >
                            YummiGo
                        </Typography>
                        {user ? (
                            <>
                                <Typography
                                    variant="button"
                                    align="center"
                                    sx={{ flexGrow: 0, marginRight: 2 }}
                                >
                                    Welcome, Benjamin F.
                                </Typography>
                                <Button color="inherit" onClick={handleLogoutClick}>
                                    <Typography
                                        variant="button"
                                        align="center"
                                        sx={{ flexGrow: 1 }}
                                    >
                                        Logout
                                    </Typography>
                                </Button>
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