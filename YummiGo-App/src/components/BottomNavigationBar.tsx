import * as React from "react";
import { useNavigate } from "react-router-dom";
import { barStyle, textTheme } from "../Style";
import { BottomNavigation, BottomNavigationAction, Box, ThemeProvider } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { AuthContext } from "../context/AuthContext";

export default function BottomNavigationBar() {
    const bottomBarStyle = { ...barStyle, bottom: 0};
    const [value, setValue] = React.useState(0);
    const navigate=useNavigate();
    const { user } = React.useContext(AuthContext);

    if (!user) {
        return null;
      }
    return (
        <ThemeProvider theme = {textTheme}>
            <Box sx={bottomBarStyle}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(_event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={bottomBarStyle}
                >
                    
                    <BottomNavigationAction
                        label="Recipe"
                        icon={<OutdoorGrillIcon />}
                        onClick={() => navigate("/YummiGo/recipe")}
                    />
                    <BottomNavigationAction
                        label="Adventure"
                        icon={<VideogameAssetIcon />}
                        onClick={() => navigate("/YummiGo/")}
                    />
                    <BottomNavigationAction
                        label="Quest"
                        icon={<AssignmentIcon />}
                        onClick={() => navigate("/YummiGo/quest")}
                    />
                    <BottomNavigationAction
                        label="Profile"
                        icon={<Person2Icon />}
                        onClick={() => navigate("/YummiGo/profile")}
                    />
                </BottomNavigation>
            </Box>
        </ThemeProvider>
    );
}