import QuizContainer from "../../components/QuizContainer";
import CarrottiImage from "/images/Yummigos/001_Carrotti.png";

const carrottiQuestions = [
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
  {
    question: "What nutrient in carrots is good for eye health?",
    answer1: "Vitamin A",
    answer2: "Vitamin C",
    correctAnswer: "Vitamin A",
  },
];

export default function CarrottiQuiz() {
  return (
    <QuizContainer
      title="Yummigo: Carrotti"
      imageSrc={CarrottiImage}
      questions={carrottiQuestions}
    >
      {''}
    </QuizContainer>
  );
}
