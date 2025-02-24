import React, { useState } from 'react';
import { Card } from './common/Card';
import { UnorderedList } from './ui/UnorderedList';
import { Button } from './ui/Button';
import { ScoreBoard } from './ui/ScoreBoard';

// We'll store an array of 20 questions
const TRIVIA_QUESTIONS = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Rome"],
    correctIndex: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctIndex: 0,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    correctIndex: 0,
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctIndex: 1,
  },
  {
    question: "Which country is home to the kangaroo?",
    answers: ["Australia", "Canada", "Brazil", "South Africa"],
    correctIndex: 0,
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correctIndex: 1,
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    correctIndex: 0,
  },
  {
    question: "Which language has the most native speakers?",
    answers: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correctIndex: 2,
  },
  {
    question: "What is the largest continent on Earth?",
    answers: ["Africa", "Asia", "North America", "Antarctica"],
    correctIndex: 1,
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: ["Iron", "Mercury", "Copper", "Silver"],
    correctIndex: 1,
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: ["K2", "Kilimanjaro", "Everest", "Denali"],
    correctIndex: 2,
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Atlantic", "Pacific", "Indian", "Arctic"],
    correctIndex: 1,
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    answers: ["China", "Brazil", "Greece", "Japan"],
    correctIndex: 1,
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Gold", "Iron", "Diamond", "Quartz"],
    correctIndex: 2,
  },
  {
    question: "Who developed the theory of relativity?",
    answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"],
    correctIndex: 1,
  },
  {
    question: "Which country is both in Europe and Asia?",
    answers: ["Spain", "Turkey", "Russia", "Greece"],
    correctIndex: 1,
  },
  {
    question: "Which instrument measures earthquakes?",
    answers: ["Thermometer", "Seismograph", "Barometer", "Anemometer"],
    correctIndex: 1,
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: ["Venus", "Earth", "Mercury", "Mars"],
    correctIndex: 2,
  },
  {
    question: "Which ocean is located at the North Pole?",
    answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctIndex: 3,
  },
  {
    question: "What is the largest animal on land?",
    answers: ["Elephant", "Hippopotamus", "Giraffe", "Rhinoceros"],
    correctIndex: 0,
  },
];

export const TriviaCard: React.FC = () => {
  // We'll store the current question index, and an array of selected answers
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    Array(TRIVIA_QUESTIONS.length).fill(-1)
  );

  // Calculate score on the fly: number of correct answers so far
  const score = selectedAnswers.reduce((acc, ans, idx) => {
    if (ans === TRIVIA_QUESTIONS[idx].correctIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const currentQuestion = TRIVIA_QUESTIONS[questionIndex];

  // Move to the next question (if not at the end)
  const handleNext = () => {
    if (questionIndex < TRIVIA_QUESTIONS.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("Reached the last question");
    }
  };

  // Move to the previous question (if not at the beginning)
  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else {
      console.log("Already at the first question");
    }
  };

  // Handle the user selecting an answer
  const handleSelect = (choiceIndex: number) => {
    const newSelected = [...selectedAnswers];
    newSelected[questionIndex] = choiceIndex;
    setSelectedAnswers(newSelected);
  };

  return (
    <Card title="Trivia Questions">
      {/* ScoreBoard at the top */}
      <ScoreBoard score={score} />

      <p className="mb-2">
        <strong>Question {questionIndex + 1} of {TRIVIA_QUESTIONS.length}:</strong>
      </p>

      <p className="mb-4">{currentQuestion.question}</p>

      <UnorderedList
        items={currentQuestion.answers}
        activeIndex={selectedAnswers[questionIndex]}
        onItemClick={handleSelect}
      />

      <div className="mt-6 flex justify-center gap-4">
        <Button variant="secondary" onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
    </Card>
  );
};
