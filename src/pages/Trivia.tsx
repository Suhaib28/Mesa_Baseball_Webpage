import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from "lucide-react";

const triviaQuestions = [
  {
    id: 1,
    question: "What year was the Cactus League founded in Arizona?",
    options: ["1945", "1947", "1950", "1952"],
    correct: 1,
    explanation: "The Cactus League was founded in 1947 when the Cleveland Indians and New York Giants came to Arizona for spring training."
  },
  {
    id: 2,
    question: "In what year did the Arizona Diamondbacks win their first World Series?",
    options: ["1999", "2000", "2001", "2002"],
    correct: 2,
    explanation: "The Diamondbacks won the 2001 World Series against the New York Yankees in just their 4th season - the fastest for any expansion team."
  },
  {
    id: 3,
    question: "Which pitcher won the World Series MVP for Arizona in 2001?",
    options: ["Curt Schilling", "Randy Johnson", "Both Schilling and Johnson", "Matt Williams"],
    correct: 2,
    explanation: "Randy Johnson and Curt Schilling shared the World Series MVP award - only the fourth time co-MVPs were named in World Series history."
  },
  {
    id: 4,
    question: "How many MLB teams currently train in Arizona during spring training?",
    options: ["10", "12", "15", "18"],
    correct: 2,
    explanation: "Arizona's Cactus League hosts 15 MLB teams each spring, making it one of the largest spring training destinations in baseball."
  },
  {
    id: 5,
    question: "Who hit the walk-off single to win Game 7 of the 2001 World Series for Arizona?",
    options: ["Matt Williams", "Luis Gonzalez", "Craig Counsell", "Mark Grace"],
    correct: 1,
    explanation: "Luis Gonzalez hit a walk-off single off Mariano Rivera in the bottom of the 9th to give Arizona the championship."
  },
  {
    id: 6,
    question: "What is the name of the Diamondbacks' home stadium?",
    options: ["Sun Devil Stadium", "Chase Field", "Phoenix Stadium", "Desert Diamond Arena"],
    correct: 1,
    explanation: "Chase Field (originally Bank One Ballpark) opened in 1998 and features a retractable roof - perfect for Arizona summers."
  },
  {
    id: 7,
    question: "Which team was the first to hold spring training in Arizona?",
    options: ["New York Giants", "Cleveland Indians", "Chicago Cubs", "Detroit Tigers"],
    correct: 1,
    explanation: "The Cleveland Indians were among the first teams in Arizona, arriving in 1947 along with the New York Giants to establish the Cactus League."
  },
  {
    id: 8,
    question: "Which legendary Negro Leagues pitcher came to Arizona with the Cleveland Indians in 1947?",
    options: ["Josh Gibson", "Satchel Paige", "Cool Papa Bell", "Buck Leonard"],
    correct: 1,
    explanation: "Satchel Paige came to Arizona with the Cleveland Indians in 1947, making history as one of the first African American players to train in the state."
  },
  {
    id: 9,
    question: "In 1956, which east-coast team became one of the first to head west for spring training in Scottsdale?",
    options: ["Boston Red Sox", "New York Yankees", "Baltimore Orioles", "Philadelphia Phillies"],
    correct: 2,
    explanation: "The Baltimore Orioles trained in Scottsdale in 1956, making them one of the first east-coast teams to head west for spring training."
  },
  {
    id: 10,
    question: "Hohokam Park in Mesa once set the largest single-game crowd in Cactus League history during the 1980s. Approximately how many fans attended?",
    options: ["8,000+", "10,000+", "12,000+", "15,000+"],
    correct: 2,
    explanation: "Hohokam Park in Mesa once hosted 12,000+ fans, the largest single-game crowd in Cactus League history during the 1980s."
  },
  {
    id: 11,
    question: "In the 1960s, Arizona boosters launched campaigns to do what?",
    options: ["Build new stadiums", "Save the Cactus League", "Bring the World Series to Arizona", "Start a new MLB team"],
    correct: 1,
    explanation: "The Cactus League nearly folded in the 1960s when teams considered returning to Florida. Arizona boosters launched 'Save the Cactus League' campaigns to keep teams in the desert."
  },
  {
    id: 12,
    question: "Where did the Milwaukee Brewers hold their very first spring training as 'Brewers' in 1970?",
    options: ["Tempe, Arizona", "Mesa, Arizona", "Sun City, Arizona", "Tucson, Arizona"],
    correct: 2,
    explanation: "The Milwaukee Brewers were originally the Seattle Pilots, and their very first spring training as 'Brewers' happened in Sun City, Arizona, in 1970."
  },
  {
    id: 13,
    question: "What did fans once bring to early Arizona ballparks due to limited seating options?",
    options: ["Blankets", "Lawn chairs", "Pillows", "Inflatable seats"],
    correct: 1,
    explanation: "Fans once brought lawn chairs to games because many early ballparks in Arizona had only basic bleachers or grass berms for seating."
  },
  {
    id: 14,
    question: "The Cactus League was among the first to experiment with what type of spring training games in the 1960s?",
    options: ["Doubleheader games", "Night games", "Televised games", "Interleague games"],
    correct: 1,
    explanation: "The Cactus League was among the first to experiment with night spring training games, giving fans a chance to watch baseball under the desert stars."
  },
  {
    id: 15,
    question: "In 1964, when the Beatles played their first Arizona concert at the old Phoenix Coliseum, which team was also in town for spring training?",
    options: ["Chicago Cubs", "San Francisco Giants", "Los Angeles Dodgers", "New York Yankees"],
    correct: 1,
    explanation: "When the Beatles played their first Arizona concert at the old Phoenix Coliseum in 1964, the San Francisco Giants were also in town for spring training."
  },
  {
    id: 16,
    question: "In the 1970s, the Oakland A's shared their Scottsdale training field with what unusual attraction?",
    options: ["A rodeo", "A Mustang car show", "A hot air balloon festival", "A motorcycle rally"],
    correct: 1,
    explanation: "The Oakland A's once shared their Scottsdale training field with a local Mustang car show — fans could see both classic cars and big-league players in one place."
  },
  {
    id: 17,
    question: "In the 1980s, which team's media began broadcasting daily from Mesa, making Cactus League games a spring tradition for fans back home?",
    options: ["New York Yankees", "Boston Red Sox", "Chicago Cubs", "St. Louis Cardinals"],
    correct: 2,
    explanation: "Chicago media began broadcasting daily from Mesa in the 1980s, making Cactus League games a spring tradition for Cubs fans back home."
  },
  {
    id: 18,
    question: "Where did the Arizona Diamondbacks hold their very first spring training before their inaugural 1998 MLB season?",
    options: ["Scottsdale", "Mesa", "Tucson", "Phoenix"],
    correct: 2,
    explanation: "The Arizona Diamondbacks held their very first spring training in Tucson before their inaugural MLB season in 1998."
  },
  {
    id: 19,
    question: "Which Hall of Famers were known for returning as guest instructors at Cactus League camps?",
    options: ["Babe Ruth and Lou Gehrig", "Bob Feller, Willie McCovey, and Billy Williams", "Jackie Robinson and Hank Aaron", "Mickey Mantle and Joe DiMaggio"],
    correct: 1,
    explanation: "Hall of Famers like Bob Feller, Willie McCovey, and Billy Williams often returned as guest instructors at Cactus League camps, delighting fans with surprise appearances."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Arizona Baseball Trivia</h1>
            <p className="text-xl opacity-95 max-w-3xl">
              Test your knowledge of Arizona baseball history
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
                    ? "Perfect score! You're an Arizona baseball expert!"
                    : score >= triviaQuestions.length * 0.7
                    ? "Great job! You know your Arizona baseball history!"
                    : score >= triviaQuestions.length * 0.5
                    ? "Good effort! Keep learning about Arizona baseball!"
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
