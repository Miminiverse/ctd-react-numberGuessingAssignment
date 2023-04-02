import Button from "./Button";

function GameOver({ isCorrectGuess, onReset }) {
  return (
    <div>
      {isCorrectGuess ? (
        <h2>Congratulations! You guessed my number.</h2>) : (<h2>You have run out of guesses.</h2>) }
      <Button onClick={onReset}>Play Again!</Button>
    </div>
  );
}

export default GameOver;
