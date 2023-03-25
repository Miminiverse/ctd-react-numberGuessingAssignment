import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 4;


export default function NumberGuessingGame  () {
  const [currentGuess, setCurrentGuess] = useState("");
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showHint, setShowHint] = useState(false);


  const handleGuess = (e) => {
    e.preventDefault();
    if (currentGuess === numberToGuess) {
      setIsGameOver(true);
      setIsCorrectGuess(true);
    }
    else {
      setShowHint(true);
      if (numberOfGuesses === MAX_ATTEMPTS) {
        setIsGameOver(true);
      }
    }
    setNumberOfGuesses(numberOfGuesses + 1);

  }

  const onReset = () => {
    setNumberToGuess(getRandomNumber());
    setCurrentGuess("");
    setNumberOfGuesses(0);
    setIsCorrectGuess(false);
    setIsGameOver(false);
    setShowHint(false);
  }
    return (
      <div>
        <h2>I'm thinking of a number from 1 to 100.</h2>
        <h2>
          Can you guess the number I am thinking of in {MAX_ATTEMPTS+1} tries?
        </h2>
        <p> Guesses so far: {numberOfGuesses}</p>
        <GuessControl 
        onGuess={handleGuess} 
        setCurrentGuess={setCurrentGuess} 
        currentGuess={currentGuess} 
        setShowHint={setShowHint}
        isGameOver={isGameOver}
        />
        {showHint ? 
        <GuessMessage
            currentGuess={currentGuess} 
            numberToGuess={numberToGuess}
            numberOfGuesses={numberOfGuesses}
            showHint={showHint}
          /> 
          : null}

        {isGameOver ?  
        (<GameOver 
        isCorrectGuess={isCorrectGuess} 
        onReset={onReset}/>) 
        : null}

      </div>
    );
  }


