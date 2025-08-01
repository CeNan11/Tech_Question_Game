import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

interface Props{
    onStart: () => void;
}

const StartScreen: React.FC<Props> = ({onStart}) => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white text-center">
        <div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                <TypeAnimation 
                    sequence={[
                        "Let's Test your Tech Knowledge",
                        1500,
                        '',
                        500,
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                    className="text-5xl font-bold font-shareTech text-white"
                    />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                    <button onClick={onStart} className="bg-gray-500 px-4 py-2 rounded-lg transition-transform hover:scale-125 duration-300 mt-5 animate-pulse">
                        Let's Start
                    </button>
            </motion.div>
        </div>
    </div>
  );
};

export default StartScreen;
