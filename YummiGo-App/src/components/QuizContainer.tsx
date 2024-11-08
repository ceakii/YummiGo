import React, { useState } from "react";
import { buttonTheme, pageStyle, textTheme } from "../Style";
import { Box, Button, CardMedia, Dialog, DialogActions, DialogTitle, ThemeProvider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface QuizContainerProps {
  children: React.ReactNode;
  title: string;
  imageSrc: string;
  questions: Array<{ question: string, answer1: string, answer2: string, answer3?: string, correctAnswer: string }>;
}

export default function QuizContainer({ children, title, imageSrc, questions }: QuizContainerProps) {
  const recipePageStyle = { ...pageStyle, overflowX: "hidden" };
  const pictureFrameSize = "20vw";
  const pictureSize = "19vw";

  const navigate = useNavigate();

  const [isButtonFlashing, setIsButtonFlashing] = useState(false);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  const [levelComplete, setLevelComplete] = useState(false);
  const [levelFailed, setLevelFailed] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const { question, answer1, answer2, answer3, correctAnswer } = questions[currentQuestionIndex];

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
      setWrongAnswerCount(prevCount => {
        const newCount = prevCount + 1;
        if (newCount === 3) {
          setLevelFailed(true);
        }
        return newCount;
      });

      setTimeout(() => setIsButtonFlashing(false), 500);
    }
  };

  const handleLevelFailedClose = () => {
    setSelectedAnswer(0);
    setWrongAnswerCount(0);
    setLevelFailed(false);
    navigate("/YummiGo/");
  };

  const handleLevelCompleteClose = () => {
    const storedButtons = JSON.parse(sessionStorage.getItem("buttons") || "[]");
    const newButton = { id: storedButtons.length + 1, label: `Level ${storedButtons.length + 1}` };
    const updatedButtons = [...storedButtons, newButton];
    sessionStorage.setItem("buttons", JSON.stringify(updatedButtons));
    setSelectedAnswer(0);
    setLevelComplete(false);
    navigate("/YummiGo/");
  };

  return (
    <Box sx={recipePageStyle}>
      {/* Picture, Button, Title Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#38E2DF"
        }}>
        {/* Image Container */}
        <Box
          sx={{
            width: "100vw",
            minHeight: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2
          }}
        >
          {/* Image Frame */}
          <Box
            sx={{
              width: pictureFrameSize,
              height: pictureFrameSize,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: "10%",
              boxShadow: 4
            }}
          >
            {/* Image */}
            <CardMedia
              component="img"
              image={imageSrc}
              alt="Spring Roll"
              sx={{
                height: pictureSize,
                width: pictureSize,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10%",
                boxShadow: 4
              }}
            />
          </Box>
        </Box>

        {/* Question Container */}
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <ThemeProvider theme={textTheme}>
            <Typography variant="h3" align="center">{question}</Typography>
          </ThemeProvider>
        </Box>

        {/* Answer Buttons */}
        <Box sx={{ mt: 2, mb: 5, display: "flex", gap: 2, px: 3 }}>
          <ThemeProvider theme={buttonTheme}>
            <Button
              onClick={() => handleAnswerClick(answer1)}
              variant="contained"
              sx={{
                minWidth: "150px",
                width: "auto",
                backgroundColor: isButtonFlashing && selectedAnswer === 1 && answer1 !== correctAnswer ? "red" : undefined,
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              <ThemeProvider theme={textTheme}>
                <Typography variant="button" display={"flex"} justifyContent={"center"}>{answer1}</Typography>
              </ThemeProvider>
            </Button>
            <Button
              onClick={() => handleAnswerClick(answer2)}
              variant="contained"
              sx={{
                minWidth: "150px",
                width: "auto",
                backgroundColor: isButtonFlashing && selectedAnswer === 2 && answer2 !== correctAnswer ? "red" : undefined,
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              <ThemeProvider theme={textTheme}>
                <Typography variant="button" display={"flex"} justifyContent={"center"}>{answer2}</Typography>
              </ThemeProvider>
            </Button>

            {answer3 && (
              <Button
                onClick={() => handleAnswerClick(answer3)}
                variant="contained"
                sx={{
                  minWidth: "150px",
                  width: "auto",
                  backgroundColor: isButtonFlashing && selectedAnswer === 3 && answer3 !== correctAnswer ? "red" : undefined,
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                <ThemeProvider theme={textTheme}>
                  <Typography variant="button" display={"flex"} justifyContent={"center"}>{answer3}</Typography>
                </ThemeProvider>
              </Button>
            )}
          </ThemeProvider>
        </Box>

        {/* Dialog for Level Complete */}
        <Dialog open={levelComplete} onClose={handleLevelCompleteClose}>
        {/* Dialog Title */}
        <DialogTitle bgcolor={"#38E2DF"} borderBottom={2}>
              <Box bgcolor={"#FEAF2F"} border={2} p={2}>
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
            <DialogActions sx={{ bgcolor: "#FEAF2F", display: 'flex', justifyContent: 'center' }}>
              <ThemeProvider theme={buttonTheme}>
                <Button onClick={handleLevelCompleteClose} variant="contained">
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
