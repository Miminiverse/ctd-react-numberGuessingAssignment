

function getGuessMessage(currentGuess, numberToGuess) {
  const distanceApart = Math.abs(numberToGuess - currentGuess);

  if (currentGuess < numberToGuess) {
    if (distanceApart > 10) {
      return "Your guess was well below the number.";
    } else {
      return "Your guess was a little below the number.";
    }
  } else {
    if (distanceApart > 10) {
      return "Your guess was well above the number.";
    } else {
      return "Your guess was a little above the number.";
    }
  }
}

function GuessMessage({ currentGuess, numberToGuess}) {

  return (
    <div>
      <p>{getGuessMessage(currentGuess, numberToGuess)}</p>
    </div>
  );
}

export default GuessMessage;
