import React from 'react';

interface Props{
    onStart: () => void;
}

const StartScreen: React.FC<Props> = ({onStart}) => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white text-center">
        <div>
            <h1 className="font-shareTech  text-5xl font-bold mb-4">Test Your Knowledge in Tech</h1>
            <button onClick={onStart} className="bg-gray-500 px-4 py-2 rounded-lg transition-transform hover:scale-125 duration-300 mt-5 animate-pulse">
                Let's Start
            </button>
        </div>
    </div>
  );
};

export default StartScreen;
