import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from "lucide-react";

const triviaQuestions = [
  {
    id: 1,
    question: "Which city hosted the very first Cactus League spring training game in 1947?",
    options: ["Phoenix", "Glendale", "Tucson", "Peoria"],
    correct: 2,
    explanation: "Tucson hosted the first game when the Cleveland Indians faced the New York Giants in 1947."
  },
  {
    id: 2,
    question: "Which Hall of Famer and owner of the Cleveland Indians was instrumental in bringing spring training to Arizona?",
    options: ["Horace Stoneham", "Del Webb", "Phil Wrigley", "Bill Veeck"],
    correct: 3,
    explanation: "Bill Veeck moved the Indians to Tucson in 1947, co-founding the Cactus League."
  },
  {
    id: 3,
    question: "Before Hohokam Stadium, which ballpark was home to the Chicago Cubs during spring training?",
    options: ["Sloan Park", "Phoenix Municipal Stadium", "Rendezvous Park", "Scottsdale Stadium"],
    correct: 2,
    explanation: "Rendezvous Park in Mesa was the Cubs' spring home before Hohokam Stadium."
  },
  {
    id: 4,
    question: "Which Arizona Cactus League ballpark is the largest in terms of seating capacity?",
    options: ["Sloan Park", "Scottsdale Stadium", "Hohokam Stadium", "Camelback Ranch"],
    correct: 0,
    explanation: "Sloan Park has 15,000 seats, making it the largest Cactus League ballpark."
  },
  {
    id: 5,
    question: "Which famous Cubs broadcaster, who coined the phrase 'Holy Cow!', was a fixture of spring training in Mesa?",
    options: ["Vin Scully", "Bob Uecker", "Harry Caray", "Pat Hughes"],
    correct: 2,
    explanation: "Harry Caray was beloved by Cubs fans and famous for his 'Holy Cow!' catchphrase."
  },
  {
    id: 6,
    question: "Which team won the 2001 World Series?",
    options: ["Arizona Diamondbacks", "Boston Red Sox", "Los Angeles Dodgers", "New York Yankees"],
    correct: 0,
    explanation: "The Diamondbacks won the 2001 World Series in just their 4th season."
  },
  {
    id: 7,
    question: "Which legendary Negro Leagues pitcher came to Arizona with the Cleveland Indians in 1947?",
    options: ["Josh Gibson", "Satchel Paige", "Cool Papa Bell", "Buck Leonard"],
    correct: 1,
    explanation: "Satchel Paige came to Arizona with the Cleveland Indians in 1947, making history as one of the first African American players to train in the state."
  },
  {
    id: 8,
    question: "In 1956, which east-coast team became one of the first to head west for spring training in Scottsdale?",
    options: ["Boston Red Sox", "New York Yankees", "Baltimore Orioles", "Philadelphia Phillies"],
    correct: 2,
    explanation: "The Baltimore Orioles trained in Scottsdale in 1956, making them one of the first east-coast teams to head west for spring training."
  },
  {
    id: 9,
    question: "Hohokam Park in Mesa once set the largest single-game crowd in Cactus League history during the 1980s. Approximately how many fans attended?",
    options: ["8,000+", "10,000+", "12,000+", "15,000+"],
    correct: 2,
    explanation: "Hohokam Park in Mesa once hosted 12,000+ fans, the largest single-game crowd in Cactus League history during the 1980s."
  },
  {
    id: 10,
    question: "Which future Hall of Famer played spring training in Scottsdale with the San Francisco Giants before hitting his record 756th career home run?",
    options: ["Barry Bonds", "Ken Griffey Jr.", "Ernie Banks", "Willie Mays"],
    correct: 0,
    explanation: "Barry Bonds trained in Scottsdale with the Giants before breaking Hank Aaron's all-time home run record."
  },
  {
    id: 11,
    question: "How many Cy Young Awards did Randy Johnson win while pitching for the Arizona Diamondbacks?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "Randy Johnson won 4 consecutive Cy Young Awards (1999-2002) with the Diamondbacks."
  },
  {
    id: 12,
    question: "Before joining the Dodgers, Shohei Ohtani played six seasons in MLB with which team?",
    options: ["Los Angeles Dodgers", "Los Angeles Angels", "Seattle Mariners", "San Diego Padres"],
    correct: 1,
    explanation: "Ohtani played for the Los Angeles Angels from 2018-2023 before joining the Dodgers."
  },
  {
    id: 13,
    question: "What was the first song ever played on an organ at a baseball game in 1941 at Wrigley Field?",
    options: ["Take Me Out to the Ball Game", "Happy Birthday", "The Star-Spangled Banner", "Beer Barrel Polka"],
    correct: 2,
    explanation: "The Star-Spangled Banner was the first song played on an organ at a baseball game in 1941."
  },
  {
    id: 14,
    question: "Before settling on the name 'Diamondbacks,' the Arizona franchise considered several other team names. Which of the following was one of the finalists?",
    options: ["Arizona Scorpions", "Arizona Coyotes", "Arizona Roadrunners", "Arizona Jackrabbits"],
    correct: 0,
    explanation: "Arizona Scorpions was one of the finalist names before Diamondbacks was chosen."
  },
  {
    id: 15,
    question: "Where did the Milwaukee Brewers hold their very first spring training as 'Brewers' in 1970?",
    options: ["Tempe, Arizona", "Mesa, Arizona", "Sun City, Arizona", "Tucson, Arizona"],
    correct: 2,
    explanation: "The Milwaukee Brewers (formerly Seattle Pilots) held their first spring training as 'Brewers' in Sun City, Arizona, in 1970."
  },
  {
    id: 16,
    question: "In the 1960s, Arizona boosters launched campaigns to do what?",
    options: ["Build new stadiums", "Save the Cactus League", "Bring the World Series to Arizona", "Start a new MLB team"],
    correct: 1,
    explanation: "The Cactus League nearly folded when teams considered returning to Florida. Arizona boosters launched 'Save the Cactus League' campaigns."
  },
  {
    id: 17,
    question: "In 1964, when the Beatles played their first Arizona concert at the old Phoenix Coliseum, which team was also in town for spring training?",
    options: ["Chicago Cubs", "San Francisco Giants", "Los Angeles Dodgers", "New York Yankees"],
    correct: 1,
    explanation: "The San Francisco Giants were in town for spring training when the Beatles played their first Arizona concert."
  },
  {
    id: 18,
    question: "Which pitcher holds the record for the most no-hitters?",
    options: ["Sandy Koufax", "Nolan Ryan", "Cy Young", "Randy Johnson"],
    correct: 1,
    explanation: "Nolan Ryan holds the record with 7 career no-hitters."
  },
  {
    id: 19,
    question: "Who was the first player to reach 400 home runs and 400 stolen bases?",
    options: ["Willie Mays", "Barry Bonds", "Alex Rodriguez", "Ken Griffey Jr."],
    correct: 1,
    explanation: "Barry Bonds was the first player to achieve the 400-400 milestone."
  },
  {
    id: 20,
    question: "Where did the Arizona Diamondbacks hold their very first spring training before their inaugural 1998 MLB season?",
    options: ["Scottsdale", "Mesa", "Tucson", "Phoenix"],
    correct: 2,
    explanation: "The Arizona Diamondbacks held their first spring training in Tucson before their inaugural season."
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
