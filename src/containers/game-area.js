import { useCallback, useEffect, useState } from "react";
import { Guess, Keyboard, HintsBoard } from "../components";
import { useSecret } from "../hooks";
import { MAX_WRONG_GUESSES, GAME_RESULT } from "../constants";
import "./style.css";
import Result from "../components/result";

function prepareHint(guess, secret) {
  let bulls = 0,
    cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }

  return `${guess.join("")}: ${bulls}B ${cows}C`;
}

export default function GameArea() {
  const { secret, resetSecret } = useSecret();
  const [guess, setGuess] = useState([]);
  const [hints, setHints] = useState([]);
  const [result, setResult] = useState(GAME_RESULT.IN_PROGRESS);

  useEffect(() => {
    setGuess([]);
    setHints([]);
    setResult(GAME_RESULT.IN_PROGRESS);
  }, [secret]);

  useEffect(() => {
    if (guess.length === secret.length) {
      const hint = prepareHint(guess, secret);
      setHints((hs) => [hint, ...hs]);
    } else if (guess.length > secret.length) {
      setGuess(guess.slice(secret.length));
    }
  }, [guess]);

  useEffect(() => {
    if (secret === guess.join("")) {
      setResult(GAME_RESULT.WON);
    }
  }, [guess]);

  const handleReset = useCallback(() => {
    if (result === GAME_RESULT.WON) {
      resetSecret();
    } else {
      setGuess([]);
    }
  }, [result]);

  const handleGuess = useCallback(
    (letter) => {
      // do not update when game is lost/won
      if (result !== GAME_RESULT.IN_PROGRESS) {
        return;
      }
      setGuess((g) => [...g, letter]);
    },
    [result]
  );
  const disabledKeys = result === GAME_RESULT.WON ? "0123456789".split("") : [];
  return (
    <div className="game-area">
      {secret}
      <Guess guess={guess} size={secret.length} />
      <div className="board-wrapper">
        <HintsBoard hints={hints} />
        <Keyboard
          disabledKeys={disabledKeys}
          onReset={handleReset}
          onKeyClick={handleGuess}
        />
      </div>
      <Result result={result} score={hints.length} />
    </div>
  );
}
