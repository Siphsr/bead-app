import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import abacusImage from '../assets/images/abacus-image.png';

import "./DictationPage.css";

const Dictation = () => {
  const [rods, setRods] = useState([0, 0, 0]); // Abacus rods for ones, tens, hundreds
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [result, setResult] = useState(null);
  const { transcript, resetTranscript } = useSpeechRecognition();

  // Check if Speech Recognition is supported
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Your browser does not support voice recognition.</div>;
  }

  // Text-to-speech function
  const speak = (message) => {
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance);
  };

  // Handle voice commands
  const handleVoiceCommand = () => {
    const command = transcript.toLowerCase();

    if (command.includes("add")) {
      const numbers = command.match(/\d+/g); // Extract numbers from the voice command
      if (numbers && numbers.length === 2) {
        const [num1, num2] = numbers.map(Number);
        setNumber1(num1);
        setNumber2(num2);
        performAddition(num1, num2);
      } else {
        speak("Please specify two numbers to add.");
      }
    } else {
      speak("Invalid command. Try saying 'Add 12 and 34'.");
    }

    resetTranscript(); // Clear transcript after processing
  };

  // Perform addition and update the abacus
  const performAddition = (num1, num2) => {
    const total = num1 + num2;
    setResult(total);

    // Break the result into digits and update rods
    const digits = total.toString().split("").reverse(); // Reverse for ones, tens, hundreds
    const updatedRods = [0, 0, 0];
    digits.forEach((digit, index) => {
      updatedRods[index] = parseInt(digit, 10);
    });
    setRods(updatedRods);

    speak(`The result is ${total}`);
  };

  return (
    <div className="dictation-container">
      <h1>Dictation Page - Abacus Addition</h1>

      <div className="abacus">
        {/* Abacus Image */}
        <div className="abacus-container">
          <img src="/assets/images/abacus-image.png" alt="Abacus" />
        </div>

        {/* Dynamic Beads */}
        <div className="bead-rod-container">
          {rods.map((beadCount, index) => (
            <div key={index} className="rod">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`bead ${i < beadCount ? "active" : ""}`}
                  style={{
                    top: `${250 - i * 30}px`,
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <button onClick={SpeechRecognition.startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        <button onClick={handleVoiceCommand}>Process Voice Command</button>
        <p>Transcript: {transcript}</p>

        <div>
          <p>Number 1: {number1}</p>
          <p>Number 2: {number2}</p>
          <h3>Result: {result}</h3>
        </div>
      </div>
    </div>
  );
};

export default Dictation;
