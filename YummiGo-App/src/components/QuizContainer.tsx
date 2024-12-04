import React, { useEffect, useRef, useState } from "react";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { Box, Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, LinearProgress, ThemeProvider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecipe } from "../../RecipeContext";
import { AuthContext } from "../context/AuthContext";

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

  const { completionStatuses, setCompletionStatuses, user } = React.useContext(AuthContext);
  const { incrementRecipeCount } = useRecipe();
  const [isButtonFlashing, setIsButtonFlashing] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);
  const [levelFailed, setLevelFailed] = useState(false);
  const wrongAnswerCount = useRef(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const { question, answer1, answer2, answer3, correctAnswer } = questions[currentQuestionIndex];

  const progress = ((currentQuestionIndex) / (questions.length - 1)) * 100;

  const [hideDialog, setHideDialog] = useState(false);

  useEffect(() => {
    if (!user) {
      // Guest user: retrieve from sessionStorage
      const guestProgress = sessionStorage.getItem("completionStatuses");
      if (guestProgress) {
        setCompletionStatuses(JSON.parse(guestProgress));
      }
    }
  }, [user, setCompletionStatuses]);

  const handleAnswerClick = (answer: string, buttonIndex: number) => {
    setSelectedAnswer(buttonIndex);

    if (answer === correctAnswer) {
      setIsCorrect(true);
      setIsButtonFlashing(true);

      setTimeout(() => {
        setIsButtonFlashing(false);
        setIsCorrect(false);

        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer(0);
        } else {
          // Check if this is the first time completing the level
          if (!completionStatuses[level - 1]) {
            setHideDialog(false);
          }
          else {
            setHideDialog(true);
          }
          if (level === 4 && !completionStatuses[level - 1]) {
            for (let i = 0; i < 8; i++) {
              incrementRecipeCount();
            }
          }
          setLevelComplete(true); // Show dialog only for first-time completion
          const updatedStatuses = [...completionStatuses];
          updatedStatuses[level - 1] = true;  // Update the completion status for the current level
          setCompletionStatuses(updatedStatuses);

          if (user) {
            localStorage.setItem(`${user}_completionStatuses`, JSON.stringify(updatedStatuses));
          } else {
            sessionStorage.setItem("completionStatuses", JSON.stringify(updatedStatuses));
          }
        }
      }, 1000); 
    } else {
      setIsCorrect(false);
      setIsButtonFlashing(true);
      wrongAnswerCount.current += 1;
      setTimeout(() => {
        setIsButtonFlashing(false);
        setSelectedAnswer(0); // Reset selection
      }, 1000);

      if (wrongAnswerCount.current === 3) {
        setLevelFailed(true);
      }
    }
  };

  const handleLevelFailedClose = () => {
    setSelectedAnswer(0);
    wrongAnswerCount.current = 0;
    setLevelFailed(false);
    navigate("/YummiGo/");
  };

  const handleLevelCompleteClose = () => {
    setSelectedAnswer(0);
    setLevelComplete(false);
    wrongAnswerCount.current = 0;

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
            <ThemeProvider theme={textTheme}>
                <Typography variant="body2" sx={{ color: "#000", fontWeight: "bold" }}>
                   { wrongAnswerCount.current } / 3 Mistakes
                </Typography>
            </ThemeProvider>
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
                onClick={() => handleAnswerClick(answer1, 1)}
                variant="contained"
                disabled={ isButtonFlashing && selectedAnswer !== 1 }
                sx={{
                  flex: 1,  // Allow the button to take up available space
                  minWidth: "150px", // Ensure buttons have a minimum width
                  width: "100%",  // Make button stretch to fill available width
                  maxWidth: "300px",
                  backgroundColor:
                    isButtonFlashing && correctAnswer != "Continue" &&
                    selectedAnswer === 1
                      ? isCorrect
                        ? "green"
                        : "red"
                      : undefined,
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
                  onClick={() => handleAnswerClick(answer2, 2)}
                  variant="contained"
                  disabled={ isButtonFlashing && selectedAnswer !== 2 }
                  sx={{
                    flex: 1,  // Allow the button to take up available space
                    minWidth: "150px", // Ensure buttons have a minimum width
                    width: "100%",  // Make button stretch to fill available width
                    maxWidth: "300px",
                    backgroundColor:
                    selectedAnswer === 2
                      ? isCorrect
                        ? "green"
                        : "red"
                      : undefined,
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
                  onClick={() => handleAnswerClick(answer3, 3)}
                  variant="contained"
                  disabled={ isButtonFlashing && selectedAnswer !== 3 }
                  sx={{
                    flex: 1,  // Allow the button to take up available space
                    minWidth: "150px", // Ensure buttons have a minimum width
                    width: "100%",  // Make button stretch to fill available width
                    maxWidth: "300px",
                    backgroundColor:
                    selectedAnswer === 3
                      ? isCorrect
                        ? "green"
                        : "red"
                      : undefined,
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

        {/* Dialog Box */}
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
                    Level Complete!
                  </Typography>
                </ThemeProvider>
              </Box>
            </DialogTitle>

            {/* Dialog Content */}
            {hideDialog ? null : (
              <DialogContent sx={{ bgcolor: "#FEAF2F" }}>
                  <DialogContentText>
                    <ThemeProvider theme={textTheme}>
                      <Typography
                        variant="body1"
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        {level === 4 ? "You earned:" : "Surprise Encounter!"}
                      </Typography>
                    </ThemeProvider>

                    <ThemeProvider theme={textTheme}>
                      <Typography
                        variant="h5" 
                        color="black"
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        {level === 4 ? "8 Recipes" : "You hear a thunderous roar coming from above you. The sun is eclipsed not by storm clouds, but a Dragon!"}
                      </Typography>
                    </ThemeProvider>

                    <ThemeProvider theme={textTheme}>
                      <Typography
                        variant="body1"
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        
                      </Typography>
                    </ThemeProvider>
                  </DialogContentText>
                </DialogContent>
            )}

            {/* Dialog Action */}
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
