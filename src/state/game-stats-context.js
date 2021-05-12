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
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const newGameStats = { ...initialState, digits: secretSize };
    setGameStats(newGameStats);
  }, [secretSize]);

  useEffect(() => {
    setGameStats((gs) => {
      const totalGames = scores.length;
      const bestScore = Math.min.apply(null, scores);
      const avgScore = Math.floor(
        scores.reduce((sum, curr) => {
          sum += curr;
          return sum;
        }, 0) / totalGames
      );
      return { ...gs, totalGames, bestScore, avgScore };
    });
  }, [scores]);

  const resetGameStats = useCallback(() => {
    setGameStats(initialState);
  }, [setGameStats]);

  const addScore = useCallback((score) => {
    setScores((s) => [...s, score]);
  }, []);

  return (
    <GameStatsContext.Provider value={{ gameStats, addScore, resetGameStats }}>
      {children}
    </GameStatsContext.Provider>
  );
};
