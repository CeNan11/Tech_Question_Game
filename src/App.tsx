import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import type { Question } from './types/index';
import QuestionScreen from './components/QuestionScreen';
import { questions } from './data/questions';

const App: React.FC = () => {

  const [ready, setReady] = useState<boolean>(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    if(ready) {
      const shuffled = [...questions].sort(() => 0.5 - Math.random());
      setQuizQuestions(shuffled.slice(0, 10));
    }
  }, [ready])

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 flex justify-center">
        {!ready ? (
          <StartScreen onStart={() => setReady(true)} />
        ) : !isFinished ? (
        quizQuestions.length > 0 && quizQuestions[currentIndex] ? ( 
          <QuestionScreen
            question={quizQuestions[currentIndex]}
            currentIndex={currentIndex}
            total={quizQuestions.length}
            onNext={() => {
              if (currentIndex + 1 < quizQuestions.length) {
                setCurrentIndex((prev) => prev + 1);
              } else {
                setIsFinished(true);
              }
            }}
          />
        ) : (
          <h1 className="text-white">Loading question...</h1>
        )
      ) : (
        <h1 className="text-white text-3xl font-bold mt-10">
          🎉 You finished the quiz! 🎉
        </h1>
      )}
    </div>
  );
};

export default App;
