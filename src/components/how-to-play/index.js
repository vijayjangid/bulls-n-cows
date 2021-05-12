import { useCallback, useState } from "react";
import "./style.css";

const InfoIcon = () => <>&#8505;</>;
const CrossIcon = () => <>X</>;

export default function HowToPlay() {
  const [showRules, setShowRules] = useState(false);
  const toggleRules = useCallback(() => {
    setShowRules((show) => !show);
  }, [setShowRules]);

  return (
    <span className="button rules-toggle neumorph" onClick={toggleRules}>
      {showRules ? <CrossIcon /> : <InfoIcon />}
      {showRules && <Rules />}
    </span>
  );
}

function Rules() {
  return (
    <div className="rules-container neumorph invert">
      You are provided a secret number to guess. Every time you enter a digit,
      it reveals some information (hint) about if the guess is correct and its
      position. Based on this series of hints, you get closer to find the secret
      number
    </div>
  );
}
