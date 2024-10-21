import { AppBar, Box, Button, ThemeProvider, Toolbar, Typography} from "@mui/material";
import { barStyle, textTheme } from "../Style";

export default function TopBar() {
    const topBarStyle = { ...barStyle, top: 0};

    return (
        <ThemeProvider theme = {textTheme}>
            <Box sx={topBarStyle}>
                <AppBar sx={topBarStyle}>
                    <Toolbar>
                        <Typography
                            variant="h1"
                            align="left"
                            sx={{ flexGrow: 1}}
                        >
                            YummiGo
                        </Typography>
                        <Button color="inherit">
                            <Typography
                                variant="button"
                                align="center"
                                sx={{
                                    flexGrow: 1,
                                }}>
                                Login
                            </Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}