import { useCallback, useEffect, useReducer, useState } from "react";
import { Guess, Keyboard, HintsBoard } from "../components";
import { useSecret } from "../hooks";
import { GAME_RESULT } from "../constants";
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

const ACTIONS = {
  SET_GUESS: "SET_GUESS",
  SET_HINTS: "SET_HINTS",
  SET_RESULT: "SET_RESULT",
  RESET: "RESET"
};

const initialState = {
  guess: [],
  hints: [],
  result: GAME_RESULT.IN_PROGRESS
};

function stateReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.RESET:
      console.log("resetting");
      return initialState;
    case ACTIONS.SET_GUESS:
      return { ...state, guess: payload };
    case ACTIONS.SET_HINTS:
      return { ...state, hints: [payload, ...state.hints] };
    case ACTIONS.SET_RESULT:
      return { ...state, result: payload };

    default:
      return state;
  }
}
function setGuess(payload) {
  return { type: ACTIONS.SET_GUESS, payload };
}
function setHints(payload) {
  return { type: ACTIONS.SET_HINTS, payload };
}
function setResult(payload) {
  return { type: ACTIONS.SET_RESULT, payload };
}
function reset() {
  return { type: ACTIONS.RESET };
}
export default function GameArea() {
  const { secret, resetSecret } = useSecret();
  const [{ guess, hints, result }, dispatch] = useReducer(
    stateReducer,
    initialState
  );
  console.log(guess);
  useEffect(() => {
    dispatch(reset());
  }, [secret]);

  useEffect(() => {
    if (secret === guess.join("")) {
      dispatch(setResult(GAME_RESULT.WON));
    }
  }, [guess, secret]);

  const handleReset = useCallback(() => {
    if (result === GAME_RESULT.WON) {
      resetSecret();
    } else {
      dispatch(setGuess([]));
    }
  }, [result, resetSecret]);

  const handleGuess = useCallback(
    (letter) => {
      // do not update when game is lost/won
      if (result !== GAME_RESULT.IN_PROGRESS) {
        return;
      }
      let guessIncludingCurrentLetter = [...guess, letter];
      if (guessIncludingCurrentLetter.length === secret.length) {
        const hint = prepareHint(guessIncludingCurrentLetter, secret);
        dispatch(setHints([hint, ...hints]));
      }
      guessIncludingCurrentLetter.length > secret.length
        ? dispatch(setGuess(guessIncludingCurrentLetter.slice(secret.length)))
        : dispatch(setGuess(guessIncludingCurrentLetter));
    },
    [result, guess, secret, hints]
  );
  console.log("hints", hints);
  const disabledKeys = result === GAME_RESULT.WON ? "0123456789".split("") : [];
  return (
    <div className="game-area">
      {secret}
      <Result result={result} score={hints.length} />
      <Guess guess={guess} size={secret.length} />
      <div className="board-wrapper">
        <HintsBoard hints={hints} />
        <Keyboard
          disabledKeys={disabledKeys}
          onReset={handleReset}
          onKeyClick={handleGuess}
        />
      </div>
    </div>
  );
}
