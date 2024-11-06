import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { pageStyle } from "../Style";

// Image Paths
import CarrottiImage from "/images/Yummigos/001_Carrotti.png";

export default function Adventure() {
  const adventurePageStyle = { ...pageStyle };
  const navigate = useNavigate();

  return (
    <Box sx={adventurePageStyle}>
      <Grid flexGrow={1} flexWrap="wrap" container spacing={0.5} display="flex">
        {/*Level 1 */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{ height: 300 }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/levels/level1")}
            >
              <CardMedia
                component="img"
                image={CarrottiImage}
                alt="Level 1"
                sx={{
                  height: 300,
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    left: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.54)",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Level 1: Carrotti
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
