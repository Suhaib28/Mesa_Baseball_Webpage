import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from "lucide-react";

const triviaQuestions = [
  {
    id: 1,
    question: "What year did the Chicago Cubs first arrive in Mesa for spring training?",
    options: ["1948", "1952", "1956", "1960"],
    correct: 1,
    explanation: "The Chicago Cubs arrived in Mesa in 1952, marking the beginning of the city's long spring training tradition."
  },
  {
    id: 2,
    question: "Which Hall of Fame player spent significant spring training time in Mesa?",
    options: ["Babe Ruth", "Ernie Banks", "Willie Mays", "Hank Aaron"],
    correct: 1,
    explanation: "Ernie Banks, Mr. Cub himself, trained extensively in Mesa during his legendary career with the Chicago Cubs."
  },
  {
    id: 3,
    question: "What is the nickname of Mesa's spring training facility?",
    options: ["The Diamond", "Sloan Park", "Cactus Field", "Desert Stadium"],
    correct: 1,
    explanation: "Sloan Park opened in 2014 and is now one of the premier spring training facilities in Arizona."
  },
  {
    id: 4,
    question: "How many MLB teams currently hold spring training in Arizona?",
    options: ["10", "12", "15", "18"],
    correct: 2,
    explanation: "Arizona hosts 15 MLB teams during spring training as part of the Cactus League."
  },
  {
    id: 5,
    question: "What was the original name of spring training baseball in Arizona?",
    options: ["Desert League", "Cactus League", "Sunshine League", "Arizona League"],
    correct: 1,
    explanation: "The Cactus League has been the name since 1947, representing Arizona's spring training tradition."
  }
];

export const Trivia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    if (optionIndex === triviaQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < triviaQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const question = triviaQuestions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / triviaQuestions.length) * 100;

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Baseball Trivia</h1>
            <p className="text-xl opacity-95 max-w-3xl">
              Test your knowledge of Mesa baseball history
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            {!quizComplete ? (
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Question {currentQuestion + 1} of {triviaQuestions.length}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      Score: {score}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-secondary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  {question.question}
                </h2>

                {/* Options */}
                <div className="space-y-4 mb-8">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.correct;
                    const showCorrect = showResult && isCorrect;
                    const showIncorrect = showResult && isSelected && !isCorrect;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-4 rounded-lg border-2 text-left font-medium transition-all ${
                          showCorrect
                            ? "border-green-500 bg-green-50 dark:bg-green-950"
                            : showIncorrect
                            ? "border-red-500 bg-red-50 dark:bg-red-950"
                            : isSelected
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary hover:bg-primary/5"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showCorrect && <span className="text-green-600 dark:text-green-400">✓</span>}
                          {showIncorrect && <span className="text-red-600 dark:text-red-400">✗</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div className={`p-6 rounded-lg mb-6 ${
                    selectedAnswer === question.correct
                      ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800"
                  }`}>
                    <p className={`font-semibold mb-2 ${
                      selectedAnswer === question.correct
                        ? "text-green-900 dark:text-green-100"
                        : "text-red-900 dark:text-red-100"
                    }`}>
                      {selectedAnswer === question.correct ? "Correct!" : "Incorrect"}
                    </p>
                    <p className="text-muted-foreground">
                      {question.explanation}
                    </p>
                  </div>
                )}

                {/* Next Button */}
                {showResult && (
                  <Button onClick={handleNext} size="lg" className="w-full" variant="hero">
                    {currentQuestion < triviaQuestions.length - 1 ? "Next Question" : "See Results"}
                  </Button>
                )}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="text-secondary" size={40} />
                </div>
                
                <h2 className="text-4xl font-bold mb-4">Quiz Complete!</h2>
                
                <p className="text-6xl font-bold text-secondary mb-6">
                  {score} / {triviaQuestions.length}
                </p>
                
                <p className="text-xl text-muted-foreground mb-8">
                  {score === triviaQuestions.length
                    ? "Perfect score! You're a Mesa baseball expert!"
                    : score >= triviaQuestions.length * 0.7
                    ? "Great job! You know your baseball history!"
                    : score >= triviaQuestions.length * 0.5
                    ? "Good effort! Keep learning about baseball history!"
                    : "Keep exploring! Visit our museum to learn more!"}
                </p>
                
                <Button onClick={handleRestart} size="lg" variant="hero">
                  <RotateCcw className="mr-2" />
                  Try Again
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Trivia;
