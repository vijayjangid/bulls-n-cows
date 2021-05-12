import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { MIN_DIGITS } from "../constants";
import { SecretContext } from "./secret-context";

export const GameStatsContext = createContext();
const initialState = {
  digits: MIN_DIGITS,
  totalGames: 0,
  bestScore: 0,
  avgScore: 0
};
export const GameStatsContextProvider = ({ children }) => {
  const { secretSize } = useContext(SecretContext);
  const [gameStats, setGameStats] = useState(initialState);

  useEffect(() => {
    const newGameStats = { ...initialState, digits: secretSize };
    setGameStats(newGameStats);
  }, [secretSize]);

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
