import Stage from "../stage";
import "./style.css";
const initialValue = [
  "2B3C",
  "4B0C",
  "0B0C",
  "2B3C",
  "4B0C",
  "0B0C",
  "2B3C",
  "4B0C",
  "0B0C"
];
export default function HintsBoard({ hints = [] }) {
  return (
    <div className="hintsboard neumorph invert disabled">
      <header className="header">
        <h2>Hints</h2>
        <div className="abbr">
          <small>
            <strong>B: Bulls</strong>, # matching digits that are in their{" "}
            <strong>correct positions</strong>
          </small>
          <small>
            {" "}
            <strong>C: Cows</strong>, # matching digits that are in{" "}
            <strong>incorrect positions</strong>
          </small>
        </div>
      </header>
      <div className="body">
        <ul reversed className="hint-list">
          {(!hints || !hints.length) && <Stage />}
          {hints.map((hint, index) => (
            <li key={hint + index} className="hint">
              <span className="srn">{hints.length - index}</span>
              <span className="hint">{hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
