import React from 'react';

interface Props{
    onStart: () => void;
}

const StartScreen: React.FC<Props> = ({onStart}) => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white text-center">
        <div>
            <h1 className="font-shareTech  text-5xl font-bold mb-4">Test Your Knowledge in Tech</h1>
            <button>Let's Start</button>
        </div>
    </div>
  );
};

export default StartScreen;
