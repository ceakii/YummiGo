import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Modal from "@mui/material/Modal"
import { Box } from "@mui/material";
import { pageStyle } from "../Style";

// Image Paths
import SpringRoll from "/images/SpringRoll.jpg"

// TODO:
// - Add more recipes + Descriptions
// - Add button functionality that makes a pop-up (modal)

export default function Recipe() {
  return (
    <Box sx={pageStyle}>
      <Grid container spacing={1} columns={2}>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={"auto"}
        >
          <Card sx={{ width: "48vw" }}>
            <CardActionArea
              onClick={() => {
                alert("Clicked")
              }}
            >
              <CardMedia
                component="img"
                height=""
                image={SpringRoll}
                alt="Spring Roll"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spring Roll
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Vietnamese spring rolls, or "gỏi cuốn," are fresh rice paper rolls 
                  filled with vegetables, herbs, and proteins like shrimp or tofu. 
                  Served with dipping sauces like peanut sauce, they offer vibrant 
                  flavors and a healthy, satisfying bite.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={"auto"}
        >
          <Card sx={{ width: "48vw" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image={SpringRoll}
                alt="Spring Roll"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spring Roll
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Vietnamese spring rolls, or "gỏi cuốn," are fresh rice paper rolls 
                  filled with vegetables, herbs, and proteins like shrimp or tofu. 
                  Served with dipping sauces like peanut sauce, they offer vibrant 
                  flavors and a healthy, satisfying bite.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={"auto"}
        >
          <Card sx={{ width: "48vw" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image={SpringRoll}
                alt="Spring Roll"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spring Roll
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Vietnamese spring rolls, or "gỏi cuốn," are fresh rice paper rolls 
                  filled with vegetables, herbs, and proteins like shrimp or tofu. 
                  Served with dipping sauces like peanut sauce, they offer vibrant 
                  flavors and a healthy, satisfying bite.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={"auto"}
        >
          <Card sx={{ width: "48vw" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image={SpringRoll}
                alt="Spring Roll"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spring Roll
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Vietnamese spring rolls, or "gỏi cuốn," are fresh rice paper rolls 
                  filled with vegetables, herbs, and proteins like shrimp or tofu. 
                  Served with dipping sauces like peanut sauce, they offer vibrant 
                  flavors and a healthy, satisfying bite.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={"auto"}
        >
          <Card sx={{ width: "48vw" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image={SpringRoll}
                alt="Spring Roll"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spring Roll
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Vietnamese spring rolls, or "gỏi cuốn," are fresh rice paper rolls 
                  filled with vegetables, herbs, and proteins like shrimp or tofu. 
                  Served with dipping sauces like peanut sauce, they offer vibrant 
                  flavors and a healthy, satisfying bite.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={"auto"}
        >
          <Card sx={{ width: "48vw" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image={SpringRoll}
                alt="Spring Roll"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spring Roll
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Vietnamese spring rolls, or "gỏi cuốn," are fresh rice paper rolls 
                  filled with vegetables, herbs, and proteins like shrimp or tofu. 
                  Served with dipping sauces like peanut sauce, they offer vibrant 
                  flavors and a healthy, satisfying bite.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}