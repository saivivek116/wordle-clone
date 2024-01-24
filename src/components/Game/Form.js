import React, { useState } from "react";

const Form = ({ updateGuessList, isEnabled }) => {
  const [guess, setGuess] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    updateGuessList(guess);
    console.log({ guess });
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        pattern="^[A-Z]{5,}"
        disabled={isEnabled}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        required
      />
    </form>
  );
};

export default Form;
