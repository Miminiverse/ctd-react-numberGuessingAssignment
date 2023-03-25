import React from "react";
import Button from "./Button";

export default function GuessControl ({isGameOver, setShowHint, onGuess, currentGuess, setCurrentGuess}) {

  const handleInputChange = (event) =>  {
    setCurrentGuess(Number(event.target.value));
    setShowHint(false)
  }

    return (
      <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
        />
        <Button 
        onClick={onGuess}
        disabled={isGameOver}
        >
          Submit Guess</Button>
      </div>
    );
  }

