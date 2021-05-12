import "./style.css";
import { GAME_RESULT } from "../../constants";

export default function Result({ result, score }) {
  let resultClass = "";
  if (result === GAME_RESULT.WON) {
    resultClass = "success";
  } else {
    return null;
  }

  return (
    <div className={`neumorph invert disabled result ${resultClass}`}>
      You did it!! <span className="score">Score: {score} attempt(s)</span>
    </div>
  );
}
