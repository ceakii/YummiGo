import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// TODO: Make App Bar not overlay elements

export default function MuiAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: "#F2B24D" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        align="left"
                        sx={{
                            flexGrow: 1,
                        }}>
                        YummiGo
                    </Typography>
                    <Button color="inherit" > Login </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}