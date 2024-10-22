import { useNavigate } from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { pageStyle } from "../Style";

// Image Paths
import SpringRollImage from "/images/SpringRoll.jpg"

export default function Recipe() {
  const recipePageStyle = { ...pageStyle };
  const navigate = useNavigate();
  
  return (
    <Box sx={recipePageStyle}>
      <Grid
        flexGrow={1}
        flexWrap="wrap"
        container
        spacing={0.5}
        display="flex"
      >
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Card sx={{height: 300}}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/springroll")}
            >
              <CardMedia
                component="img"
                image={SpringRollImage}
                alt="Spring Roll"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Spring Roll
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Card sx={{height: 300}}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/springroll")}
            >
              <CardMedia
                component="img"
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
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
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Card sx={{height: 300}}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/springroll")}
            >
              <CardMedia
                component="img"
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
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
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Card sx={{height: 300}}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/springroll")}
            >
              <CardMedia
                component="img"
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
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
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Card sx={{height: 300}}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/springroll")}
            >
              <CardMedia
                component="img"
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
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
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Card sx={{height: 300}}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/springroll")}
            >
              <CardMedia
                component="img"
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
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
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Card sx={{height: 300}}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/springroll")}
            >
              <CardMedia
                component="img"
                image={SpringRollImage}
                alt="Food Name Here!"
                sx={{
                  height: 300
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography gutterBottom variant="h5">
                    Food Name Here!
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