import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const GuessResults = ({ guessList, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
        const guessStatus =
          row < guessList.length && checkGuess(guessList[row], answer);
        return row < guessList.length ? (
          <p key={row} className="guess">
            {range(5).map((col) => {
              return (
                <span className={`cell ${guessStatus[col].status}`} key={col}>
                  {guessList[row][col]}
                </span>
              );
            })}
          </p>
        ) : (
          <p key={row} className="guess">
            {range(5).map((col) => {
              return <span className="cell" key={col}></span>;
            })}
          </p>
        );
      })}
    </div>
  );
};

export default GuessResults;
