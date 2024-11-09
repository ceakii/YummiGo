import React, { useEffect, useRef, useState } from "react";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { Box, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, LinearProgress, ThemeProvider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecipeUpload } from "../../RecipeUploadContext";

interface QuizContainerProps {
  children: React.ReactNode;
  title: string;
  imageSrc: string;
  questions: Array<{ question: string, answer1: string, answer2?: string, answer3?: string, correctAnswer: string }>;
  level: number;
}

export default function QuizContainer({ children, title, imageSrc, questions, level }: QuizContainerProps) {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden" };
  const pictureSize = "19vw";

  const navigate = useNavigate();

  const [isButtonFlashing, setIsButtonFlashing] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);
  const [levelFailed, setLevelFailed] = useState(false);
  const wrongAnswerCount = useRef(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const { question, answer1, answer2, answer3, correctAnswer } = questions[currentQuestionIndex];

  const progress = ((currentQuestionIndex) / (questions.length - 1)) * 100;

  const handleAnswerClick = (answer: string) => {
    if (answer === answer1) {
      setSelectedAnswer(1);
    }
    else if (answer === answer2) {
      setSelectedAnswer(2);
    }
    else {
      setSelectedAnswer(3);
    }
    if (answer === correctAnswer) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setLevelComplete(true);
      }
    } else {
      setIsButtonFlashing(true);
      wrongAnswerCount.current += 1;
      if (wrongAnswerCount.current === 3) {
        setLevelFailed(true);
      }

      setTimeout(() => setIsButtonFlashing(false), 500);
    }
  };

  // Track the current level completion status
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  useEffect(() => {
    // Retrieve completed levels from sessionStorage
    const storedLevels = sessionStorage.getItem("completedLevels");
    if (storedLevels) {
      setCompletedLevels(JSON.parse(storedLevels));
    }
  }, []);

  const { incrementRecipeUploadCount } = useRecipeUpload();

  const handleLevelCompletion = (levelId: number) => {
    // Save level completion status in sessionStorage
    sessionStorage.setItem(`level${levelId}Completed`, "true");
  }

  const handleLevelFailedClose = () => {
    setSelectedAnswer(0);
    wrongAnswerCount.current = 0;
    setLevelFailed(false);
    navigate("/YummiGo/");
  };

  const handleLevelCompleteClose = () => {
    setSelectedAnswer(0);
    setLevelComplete(false);
    // Update completed levels in sessionStorage
    const newCompletedLevels = [...completedLevels, level];
    sessionStorage.setItem("completedLevels", JSON.stringify(newCompletedLevels));
    setCompletedLevels(newCompletedLevels);
    handleLevelCompletion(level);
    if (sessionStorage.level4Completed) {
      let count = 0;
      while (count < 11) {
        incrementRecipeUploadCount();
        count++;
      }
    }
    navigate("/YummiGo/");
  };

  return (
    <Box sx={recipePageStyle}>
      
      {/* Picture, Button, Title Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#38E2DF",
          padding: { xs: 1, sm: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 2,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="body1">
                {title}
              </Typography>
            </ThemeProvider>
          </Box>
          <Box sx={{ width: "60%", display: "flex", justifyContent: "center", position: "relative", border: "2px solid #000", borderRadius: 10 }}>
            {/* Custom HP Bar */}
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 20,
                width: "100%",
                borderRadius: 10,
                backgroundColor: "#f2f2f2",
                '& .MuiLinearProgress-bar': {
                  borderRadius: 10,
                  backgroundColor: "#7EAB33",
                  transition: 'transform 0.5s ease-in-out',  // Smooth sliding transition
                  transform: `scaleX(${progress / 100})`,  // Animate using scaleX for width adjustment
                  transformOrigin: "left",  // Make sure the progress bar starts from the left
                }
              }}
            />
            {/* Text Inside the Progress Bar */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
              }}
            >
              <ThemeProvider theme={textTheme}>
                <Typography variant="body2" sx={{ color: "#000", fontWeight: "bold" }}>
                  {currentQuestionIndex}/{questions.length - 1} Questions
                </Typography>
              </ThemeProvider>
            </Box>
          </Box>
            {/* Image */}
            <CardMedia
              component="img"
              image={imageSrc}
              alt="Image"
              sx={{
                height: pictureSize,
                width: pictureSize,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10%",
              }}
            /> 
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 2,
          }}
        >
          {/* Question Container */}
          <Box sx={{ textAlign: "center" }}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="body1" align="center">{question}</Typography>
            </ThemeProvider>
          </Box>

          {/* Answer Buttons */}
          <Box sx={{ mt: 2, mb: 5, display: "flex", gap: 2, flexDirection: "column", alignItems: "center", width: "100%" }}>
            <ThemeProvider theme={buttonTheme}>
              <Button
                onClick={() => handleAnswerClick(answer1)}
                variant="contained"
                sx={{
                  flex: 1,  // Allow the button to take up available space
                  minWidth: "150px", // Ensure buttons have a minimum width
                  width: "100%",  // Make button stretch to fill available width
                  maxWidth: "300px",
                  backgroundColor: isButtonFlashing && selectedAnswer === 1 && answer1 !== correctAnswer ? "red" : undefined,
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                <Typography
                  variant="button"
                  display={"flex"}
                  justifyContent={"center"}
                  width="100%"
                  sx={{
                    color: "white",
                    fontWeight: "bold", // Makes the text bold
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds the text outline effect
                  }}
                >
                  {answer1}
                </Typography>
              </Button>
              {answer2 && (
                <Button
                  onClick={() => handleAnswerClick(answer2)}
                  variant="contained"
                  sx={{
                    flex: 1,  // Allow the button to take up available space
                    minWidth: "150px", // Ensure buttons have a minimum width
                    width: "100%",  // Make button stretch to fill available width
                    maxWidth: "300px",
                    backgroundColor: isButtonFlashing && selectedAnswer === 2 && answer2 !== correctAnswer ? "red" : undefined,
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <Typography
                    variant="button"
                    display={"flex"}
                    justifyContent={"center"}
                    width="100%"
                    sx={{
                      color: "white",
                      fontWeight: "bold", // Makes the text bold
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds the text outline effect
                    }}
                  >
                    {answer2}
                  </Typography>
                </Button>
              )}

              {answer3 && (
                <Button
                  onClick={() => handleAnswerClick(answer3)}
                  variant="contained"
                  sx={{
                    flex: 1,  // Allow the button to take up available space
                    minWidth: "150px", // Ensure buttons have a minimum width
                    width: "100%",  // Make button stretch to fill available width
                    maxWidth: "300px",
                    backgroundColor: isButtonFlashing && selectedAnswer === 3 && answer3 !== correctAnswer ? "red" : undefined,
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <Typography
                    variant="button"
                    display={"flex"}
                    justifyContent={"center"}
                    width="100%"
                    sx={{
                      color: "white",
                      fontWeight: "bold", // Makes the text bold
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds the text outline effect
                    }}
                  >
                    {answer3}
                  </Typography>
                </Button>
              )}
            </ThemeProvider>
          </Box>
        </Box>

        {/* Dialog for Level Complete */}
        <Dialog open={levelComplete} onClose={handleLevelCompleteClose}>
        {/* Dialog Title */}
        <DialogTitle bgcolor={"#38E2DF"} borderBottom={2}>
              <Box bgcolor={"#FEAF2F"} border={2}>
                <ThemeProvider theme={textTheme}>
                  <Typography
                    variant="button"
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    {sessionStorage.level3Completed ? "Reward Obtained" : "Surprise Encounter!"}
                  </Typography>
                </ThemeProvider>
              </Box>
            </DialogTitle>
            {/* Dialog Content */}
            <DialogContent sx={{ bgcolor: "#FEAF2F" }}>
              <DialogContentText>
                <ThemeProvider theme={textTheme}>
                  <Typography
                    variant="body1"
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    {sessionStorage.level3Completed ? "11 Recipes" : "You hear a thunderous roar coming from above you. The sun is eclipsed not by storm clouds, but a Dragon!"}
                  </Typography>
                </ThemeProvider>
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ bgcolor: "#FEAF2F", display: 'flex', justifyContent: 'center' }}>
              <ThemeProvider theme={buttonTheme}>
                <Button onClick={handleLevelCompleteClose} variant="contained">
                  <ThemeProvider theme={textTheme}>
                    <Typography
                      variant="h6"
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      Close
                    </Typography>
                  </ThemeProvider>
                </Button>
              </ThemeProvider>
            </DialogActions>
        </Dialog>

        {/* Dialog for Level Failed */}
        <Dialog open={levelFailed} onClose={handleLevelFailedClose}>
        <DialogTitle bgcolor={"#38E2DF"} borderBottom={2}>
              <Box bgcolor={"#FEAF2F"} border={2} p={2}>
                <ThemeProvider theme={textTheme}>
                  <Typography
                    variant="button"
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    Level Failed...
                  </Typography>
                </ThemeProvider>
              </Box>
            </DialogTitle>
            <DialogActions sx={{ bgcolor: "#FEAF2F", display: 'flex', justifyContent: 'center' }}>
              <ThemeProvider theme={buttonTheme}>
                <Button onClick={handleLevelFailedClose} variant="contained">
                  <ThemeProvider theme={textTheme}>
                    <Typography
                      variant="h6"
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      Continue
                    </Typography>
                  </ThemeProvider>
                </Button>
              </ThemeProvider>
            </DialogActions>
        </Dialog>

      </Box>

      {/* Food Description Container */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#FEAF2F", p: 2 }}>
        <ThemeProvider theme={textTheme}>
          <Typography variant="body1">{children}</Typography>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
