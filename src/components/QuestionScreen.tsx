import React, { useState, useEffect } from 'react';
import type { Question } from '../types';

interface Props {
  question: Question;
  currentIndex: number;
  total: number;
  onNext: () => void;
}

const QuestionScreen: React.FC<Props> = ({ question, currentIndex, total, onNext }) => {
  const [selected, setSelected] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    if (error) setError("");
  };

    useEffect(() => {
    setSelected("");
    setHasAnswered(false);
    setIsCorrect(null);
    setError("");
    }, [question, currentIndex]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selected === "") {
      setError("Please select an answer to continue.");
      return;
    }

    const correct = selected === question.answer;
    setIsCorrect(correct);
    setHasAnswered(true);
  };

  return (
    <div className="text-white font-shareTech mt-5 bg-white/20 h-auto min-h-[340px] w-[500px] rounded-lg py-4 px-5 flex flex-col">
      <h1 className="mb-2 text-lg">Question {currentIndex + 1} of {total}</h1>

      <div className="flex items-center h-24">
        <p className="text-xl">{question.question}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex-grow">
        <div className="flex flex-col space-y-2">
          {question.options.map((option) => {
            const isCorrectAnswer = option === question.answer;
            const isSelectedAnswer = option === selected;

            let labelClass = "hover:bg-white/10";
            if (hasAnswered) {
              if (isCorrectAnswer) {
                labelClass = "bg-green-500/80";
              } else if (isSelectedAnswer) {
                labelClass = "bg-red-500/80";
              } else {
                labelClass = "bg-white/10"; 
              }
            }

            return (
              <label
                key={option}
                className={`block p-3 rounded-md transition-colors ${labelClass} ${hasAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selected === option}
                  onChange={() => handleSelect(option)}
                  disabled={hasAnswered}
                  className="mr-3"
                />
                {option}
              </label>
            );
          })}
        </div>

        <div className="text-center mt-4">
          {!hasAnswered && error && (
            <p className="text-red-400 text-sm mb-2">{error}</p>
          )}

          {hasAnswered ? (
            <>
              <p className="text-lg font-bold">
                {isCorrect ? "✅ Correct!" : `❌ Wrong! The correct answer is: ${question.answer}`}
              </p>
              <button
                type="button"
                onClick={onNext}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                Next
              </button>
            </>
          ) : (
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuestionScreen;
