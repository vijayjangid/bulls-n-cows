import { useCallback, useState } from "react";
import { useGameStats } from "../../hooks";
import "./style.css";

const QueenIcon = () => <>&#9819;</>;
const CrossIcon = () => <>X</>;

export default function GameStats() {
  const [show, toggle] = useState(false);

  const onToggle = useCallback(() => {
    toggle((show) => !show);
  }, [toggle]);

  return (
    <span className="button game-stats-toggle neumorph" onClick={onToggle}>
      {show ? <CrossIcon /> : <QueenIcon />}
      {show && <GameStatsContainer />}
    </span>
  );
}

function GameStatsContainer() {
  const { gameStats } = useGameStats();
  return (
    <div className="game-stats-container neumorph invert">
      <pre> {JSON.stringify(gameStats, null, 2)}</pre>
    </div>
  );
}
