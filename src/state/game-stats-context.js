import { createContext, useCallback, useEffect, useState } from "react";
import { MIN_DIGITS } from "../constants";

export const GameStatsContext = createContext();
const initialState = {
  digits: MIN_DIGITS,
  totalGames: 0,
  wins: 0,
  losses: 0,
  bestScore: 0,
  avgScore: 0
};
export const GameStatsContextProvider = ({ children }) => {
  const [gameStats, setGameStats] = useState(initialState);
  const resetGameStats = useCallback(() => {
    setGameStats(initialState);
  }, [setGameStats]);

  return (
    <GameStatsContext.Provider
      value={{ gameStats, setGameStats, resetGameStats }}
    >
      {children}
    </GameStatsContext.Provider>
  );
};
