import QuizContainer from "../../components/QuizContainer";
import DragonImage from "/images/Yummigos/040_Dragon.png";

const dragonQuestions = [
  {
    question: "Which of these is rich in beta-carotene, which supports eye health, skin health, and immune function?",
    answer1: "Carrot",
    answer2: "Celery",
    answer3: "Bell Peppers",
    correctAnswer: "Carrot",
  },
  {
    question: "What nutrient is hummus particularly high in that aids digestion and helps keep you full longer?",
    answer1: "Carbohydrates",
    answer2: "Protein",
    answer3: "Fiber",
    correctAnswer: "Fiber",
  },
  {
    question: "Which of these is particularly known for its high antioxidant content, helping fight inflammation?",
    answer1: "Carrot",
    answer2: "Bell Pepper",
    answer3: "Celery",
    correctAnswer: "Bell Pepper",
  },
  {
    question: "What benefit does the low glycemic index (GI) of hummus and veggies provide?",
    answer1: "Helps regulate blood sugar and provides steady energy",
    answer2: "Helps reduce muscle fatigue",
    answer3: "Reduces cholesterol levels",
    correctAnswer: "Helps regulate blood sugar and provides steady energy",
  },
  {
    question: "What is a key reason to incorporate hummus and veggie sticks into your diet regularly?",
    answer1: "To boost energy for intense workouts",
    answer2: "To increase calorie intake",
    answer3: "To improve digestion and support weight management",
    correctAnswer: "To improve digestion and support weight management",
  }
];

export default function DragonQuiz() {
  return (
    <QuizContainer
      title="Yummigo: Dragon"
      imageSrc={DragonImage}
      questions={dragonQuestions}
    >
      {''}
    </QuizContainer>
  );
}
