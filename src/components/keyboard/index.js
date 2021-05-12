import { memo, useCallback, useEffect } from "react";
import KeyboardButton from "../keyboard-button";
import "./style.css";

const keys = "1234567890".split("");
const Keyboard = memo(({ onKeyClick, onReset, disabledKeys = [] }) => {
  const handleKeyOnClick = useCallback(
    (event) => {
      onKeyClick(event.target.value);
    },
    [onKeyClick]
  );

  const handleKeyOnPress = useCallback(
    (event) => {
      event.preventDefault();
      /**
       * RESET
       * 8 = backspace
       * 13 = enter
       * 32 = space
       *
       * NORMAL
       * 48 = 0 (Capital)
       * 57 = 9 (Small)
       */
      const code = event.keyCode || event.which;
      if (event.shiftKey || event.altKey || event.ctrlKey) {
        return;
      }

      if (code === 8 || code === 13 || code === 32) {
        onReset();
      } else if (code >= 48 && code <= 57) {
        onKeyClick(event.key);
      }
    },
    [onKeyClick, onReset]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyOnPress);
    return () => document.removeEventListener("keyup", handleKeyOnPress);
  }, [handleKeyOnPress]);

  return (
    <div className="keyboard">
      {keys.map((key) => (
        <KeyboardButton
          key={key}
          value={key}
          disabled={disabledKeys.includes(key)}
          onClick={handleKeyOnClick}
        />
      ))}
      <KeyboardButton value="reset" text="Reset" onClick={onReset} />
    </div>
  );
});

export default Keyboard;
