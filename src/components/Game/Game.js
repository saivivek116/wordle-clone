import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "./Form";
import GuessResults from "./GuessResults";
import Banner from "./Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [status, setStatus] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  function updateGuessList(guess) {
    const newGuessList = [...guessList, guess];
    setGuessList(newGuessList);
    if (newGuessList.length === NUM_OF_GUESSES_ALLOWED && guess !== answer) {
      setShowBanner(true);
    }
    if (guess === answer) {
      setStatus(true);
      setShowBanner(true);
    }
  }
  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <Form updateGuessList={updateGuessList} isEnabled={showBanner} />
      {showBanner && (
        <Banner status={status} count={guessList.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
