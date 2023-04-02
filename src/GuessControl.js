import React from "react";
import Button from "./Button";

export default function GuessControl ({isGameOver, onGuess, currentGuess, setCurrentGuess}) {

  const handleInputChange = (event) =>  {
    setCurrentGuess(event.target.value);
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

