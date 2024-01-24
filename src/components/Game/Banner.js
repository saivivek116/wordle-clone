import React from "react";

const Banner = ({ status, count, answer }) => {
  return (
    <div className={`${status ? "happy" : "sad"} banner`}>
      {status ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{count} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
};
export default Banner;
