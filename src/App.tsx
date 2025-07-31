import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';

const App: React.FC = () => {
  const [ready, setReady] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 flex justify-center">
      {!ready ? (
        <StartScreen onStart={() => setReady(true)}/>
      )
      :(
        <QuestionScreen/>
      )
      }
    </div>
  );
};

export default App;
