import React, { useState } from "react";
import { Box, Button, Typography, ThemeProvider } from "@mui/material";
import { buttonTheme, textTheme } from "../../Style";

const quizData = [
  {
    question: "What does Carrotti like to eat?",
    answer1: "Vegetables",
    answer2: "Fruit",
    correctAnswer: "Vegetables",
  },
  {
    question: "Where does Carrotti get nutrients?",
    answer1: "Through its leaves",
    answer2: "Through its stem",
    correctAnswer: "Through its stem",
  },
];

export default function CarrottiQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isButtonFlashing, setIsButtonFlashing] = useState(false);

  const handleAnswerClick = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer;
    if (isCorrect) {
      // Move to the next question if correct
      setIsButtonFlashing(false);
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        alert("Quiz Complete!");
      }
    } else {
      setIsButtonFlashing(true);
      setTimeout(() => setIsButtonFlashing(false), 500);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        gap: 3, 
      }}
    >
      <ThemeProvider theme={textTheme}>
        <Typography variant="h4" align="center" gutterBottom>
          Quiz Time: Carrotti
        </Typography>
        <ThemeProvider theme={textTheme}>
          <Typography variant="h4" display={"flex"} justifyContent={"center"}>{quizData[currentQuestion].question}</Typography>
        </ThemeProvider>
      </ThemeProvider>

      <ThemeProvider theme={buttonTheme}>
        <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
          <Button
              variant="contained"
              onClick={() => handleAnswerClick(quizData[currentQuestion].answer1)}
              sx={{
                backgroundColor: isButtonFlashing && quizData[currentQuestion].answer1 !== quizData[currentQuestion].correctAnswer
                  ? "red"
                  : undefined,
                transition: "background-color 0.3s ease-in-out",
              }}
          >
            <ThemeProvider theme={textTheme}>
              <Typography variant="button" display={"flex"} justifyContent={"center"}>{quizData[currentQuestion].answer1}</Typography>
            </ThemeProvider>
          </Button>
            <Button
              variant="contained"
              onClick={() => handleAnswerClick(quizData[currentQuestion].answer2)}
              sx={{
                backgroundColor: isButtonFlashing && quizData[currentQuestion].answer2 !== quizData[currentQuestion].correctAnswer
                  ? "red"
                  : undefined,
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              <ThemeProvider theme={textTheme}>
                <Typography variant="button" display={"flex"} justifyContent={"center"}>{quizData[currentQuestion].answer2}</Typography>
              </ThemeProvider>
          </Button>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
