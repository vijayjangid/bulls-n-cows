import { useCallback } from "react";
import useWordSource from "../../hooks/use-word-source-hook";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";
import "./style.css";

export default function Header() {
  const { wordsource, wordsources, setWordsource } = useWordSource();
  const handleWordsourceChange = useCallback(
    (e) => {
      setWordsource(e.target.value);
    },
    [setWordsource]
  );

  return (
    <header className="header">
      <nav>
        <a href="/" className="logo neumorph">
          <Logo />
          <div className="logo-text">
            <h1>Bulls</h1>
            <small>n</small>
            <h1>Cows</h1>
          </div>
        </a>
        <ul>
          <li>
            <label htmlFor="wordsource">Word source:</label>
            <select
              id="wordsource"
              className="neumorph"
              type="text"
              placeholder="Choose a word source"
              value={wordsource}
              onChange={handleWordsourceChange}
            >
              {wordsources.map((source) => (
                <option key={source}>{source}</option>
              ))}
            </select>
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
