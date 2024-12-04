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
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// Image Paths
import SpringRollImage from "/images/SpringRoll.jpg";
import AvocadoSmoothieImage from "/images/AvocadoSmoothie.jpg";
import ChickenPorridgeImage from "/images/ChickenPorridge.jpg";
import PastaSaladImage from "/images/PastaSalad.jpg";
import GranolaBars from "/images/GranolaBars.png";
import AvocadoToastwWGB from "/images/AvocadoToastwWGB.png";
import GreekYogurtwFBaN from "/images/GreekYogurtwFBaN.png";
import HummusaVeggieSticks from "/images/HummusaVeggieSticks.png";
import QuinoaSaladwCaV from "/images/QuinoaSaladwCaV.png";
import ChiaSeedPuddingwAMaF from "/images/ChiaSeedPuddingwAMaF.png";
import EggaMustardCrackers from "/images/EggaMustardCrackers.png";
import BakedSweetPotatoFries from "/images/BakedSweetPotatoFries.png";

export default function Recipe() {
  const recipePageStyle = { ...pageStyle };
  const navigate = useNavigate();

  const { completionStatuses } = useContext(AuthContext);

  const level2Completed = completionStatuses[1];
  const level4Completed = completionStatuses[3];

  return (
    <Box sx={recipePageStyle}>
      <Grid flexGrow={1} flexWrap="wrap" container spacing={0.5} display="flex">
        {/*Spring roll */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
              height: 300,
            }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/springroll")}
            >
              <CardMedia
                component="img"
                image={SpringRollImage}
                alt="Spring Roll"
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
                    Spring Roll
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Granola Bars */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/granolabars")}
            >
              <CardMedia
                component="img"
                image={GranolaBars}
                alt="Granola Bars"
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
                    Granola Bars
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Avocado Toast with Whole Grain Bread*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/avocadotoastwwgb")}
            >
              <CardMedia
                component="img"
                image={AvocadoToastwWGB}
                alt="Avocado Toast with Whole Grain Bread"
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
                    Avocado Toast with Whole Grain Bread
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Greek Yogurt with Fresh Berries and Nuts*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
            opacity: level4Completed ? 1 : 0.5, // Decrease opacity when locked
            pointerEvents: level4Completed ? 'auto' : 'none', // Disable click events
            filter: level4Completed ? 'none' : 'grayscale(100%)', // Apply grayscale effect when locked
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/greekyogurtwfban")}
              disabled={!level4Completed}
            >
              <CardMedia
                component="img"
                image={GreekYogurtwFBaN}
                alt="Greek Yogurt with Fresh Berries and Nuts"
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
                    Greek Yogurt with Fresh Berries and Nuts
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Hummus and Veggie Sticks*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
            opacity: level2Completed ? 1 : 0.5, // Decrease opacity when locked
            pointerEvents: level2Completed ? 'auto' : 'none', // Disable click events
            filter: level2Completed ? 'none' : 'grayscale(100%)', // Apply grayscale effect when locked
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/hummusaveggiesticks")}
              disabled={!level2Completed}
            >
              <CardMedia
                component="img"
                image={HummusaVeggieSticks}
                alt="Hummus and Veggie Sticks"
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
                    Hummus and Veggie Sticks
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Quinoa Salad with Chickpeas and Vegetables*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
            opacity: level4Completed ? 1 : 0.5, // Decrease opacity when locked
            pointerEvents: level4Completed ? 'auto' : 'none', // Disable click events
            filter: level4Completed ? 'none' : 'grayscale(100%)', // Apply grayscale effect when locked
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/quinoasaladwcav")}
              disabled={!level4Completed}
            >
              <CardMedia
                component="img"
                image={QuinoaSaladwCaV}
                alt="Quinoa Salad with Chickpeas and Vegetables"
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
                    Quinoa Salad with Chickpeas and Vegetables
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Chia Seed Pudding with Almond Milk and Fruit*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
            opacity: level4Completed ? 1 : 0.5, // Decrease opacity when locked
            pointerEvents: level4Completed ? 'auto' : 'none', // Disable click events
            filter: level4Completed ? 'none' : 'grayscale(100%)', // Apply grayscale effect when locked
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/chiaseedpuddingwamaf")}
              disabled={!level4Completed}
            >
              <CardMedia
                component="img"
                image={ChiaSeedPuddingwAMaF}
                alt="Chia Seed Pudding with Almond Milk and Fruit"
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
                    Chia Seed Pudding with Almond Milk and Fruit
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Egg & Mustard Crackers*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
            opacity: level4Completed ? 1 : 0.5, // Decrease opacity when locked
            pointerEvents: level4Completed ? 'auto' : 'none', // Disable click events
            filter: level4Completed ? 'none' : 'grayscale(100%)', // Apply grayscale effect when locked
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/eggamustardcrackers")}
              disabled={!level4Completed}
            >
              <CardMedia
                component="img"
                image={EggaMustardCrackers}
                alt="Egg & Mustard Crackers"
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
                    Egg & Mustard Crackers
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Baked Sweet Potato Fries*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
            opacity: level4Completed ? 1 : 0.5, // Decrease opacity when locked
            pointerEvents: level4Completed ? 'auto' : 'none', // Disable click events
            filter: level4Completed ? 'none' : 'grayscale(100%)', // Apply grayscale effect when locked
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/bakedsweetpotatofries")}
              disabled={!level4Completed}
            >
              <CardMedia
                component="img"
                image={BakedSweetPotatoFries}
                alt="Baked Sweet Potato Fries"
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
                    Baked Sweet Potato Fries
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Spinach-Basil Pasta Salad*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
            opacity: level4Completed ? 1 : 0.5, // Decrease opacity when locked
            pointerEvents: level4Completed ? 'auto' : 'none', // Disable click events
            filter: level4Completed ? 'none' : 'grayscale(100%)', // Apply grayscale effect when locked
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/pastasalad")}
              disabled={!level4Completed}
            >
              <CardMedia
                component="img"
                image={PastaSaladImage}
                alt="Spinach-Basil Pasta Salad"
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
                    Spinach-Basil Pasta Salad
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Chicken Porridge*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
            opacity: level4Completed ? 1 : 0.5, // Decrease opacity when locked
            pointerEvents: level4Completed ? 'auto' : 'none', // Disable click events
            filter: level4Completed ? 'none' : 'grayscale(100%)', // Apply grayscale effect when locked
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/chickenporridge")}
              disabled={!level4Completed}
            >
              <CardMedia
                component="img"
                image={ChickenPorridgeImage}
                alt="Chicken Porridge"
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
                    Chicken Porridge
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/*Avocado Smoothie*/}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{
            height: 300,
            opacity: level4Completed ? 1 : 0.5, // Decrease opacity when locked
            pointerEvents: level4Completed ? 'auto' : 'none', // Disable click events
            filter: level4Completed ? 'none' : 'grayscale(100%)', // Apply grayscale effect when locked
          }}>
            <CardActionArea
              onClick={() => navigate("/YummiGo/recipes/avocadosmoothie")}
              disabled={!level4Completed}
            >
              <CardMedia
                component="img"
                image={AvocadoSmoothieImage}
                alt="Avocado Smoothie"
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
                    Avocado Smoothie
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
