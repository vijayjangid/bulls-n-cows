import { useCallback } from "react";
import { useSecretSize } from "../../hooks";
import HowToPlay from "../how-to-play";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";
import GameStats from "../game-stats";
import "./style.css";

function generateOptions(start = 3, end = 5) {
  const arr = new Array(end - start + 1).fill(start);
  return arr.map((num, idx) => <option key={idx + num}>{idx + num}</option>);
}
export default function Header() {
  const { secretSize, setSecretSize } = useSecretSize();
  const handleWordsourceChange = useCallback(
    (e) => {
      setSecretSize(Number(e.target.value));
    },
    [setSecretSize]
  );

  return (
    <header className="header">
      <nav>
        <a href="/" className="logo neumorph">
          <Logo />
          <div className="logo-text">
            <h1>Bulls</h1>
            <strong className="n">n</strong>
            <h1>Cows</h1>
          </div>
        </a>
        <ul>
          <li>
            <label htmlFor="numbersize">#digits:</label>
            <select
              id="numbersize"
              className="neumorph"
              type="text"
              placeholder="Choose #digits"
              value={secretSize}
              onChange={handleWordsourceChange}
            >
              {generateOptions()}
            </select>
          </li>
          <li>
            <span role="button" className="neumorph">
              <HowToPlay />
            </span>
          </li>
          <li>
            <span role="button" className="neumorph">
              <GameStats />
            </span>
          </li>
          <li>
            <span role="button" className="neumorph">
              <ThemeToggle />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
