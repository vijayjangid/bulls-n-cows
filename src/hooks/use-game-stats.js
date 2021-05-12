import { useContext } from "react";
import { GameStatsContext } from "../state/game-stats-context";

export default function useGameStats() {
  return useContext(GameStatsContext);
}
