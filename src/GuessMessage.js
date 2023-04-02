

function getGuessMessage(latestGuess, numberToGuess) {
  const distanceApart = Math.abs(numberToGuess - latestGuess);

  if (latestGuess < numberToGuess) {
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

function GuessMessage({ latestGuess, numberToGuess}) {

  return (
    <div>
      <p>{getGuessMessage(latestGuess, numberToGuess)}</p>
    </div>
  );
}

export default GuessMessage;
