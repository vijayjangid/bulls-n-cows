import "./style.css";
function GuessLetter({ letter }) {
  return (
    <span className={`guess-letter neumorph invert disabled`}>{letter}</span>
  );
}
export default function Guess({ guess, size }) {
  const arr = new Array(size).fill("-");
  return (
    <div className="secret">
      {arr.map((letter, index) => (
        <GuessLetter key={letter + index} letter={guess[index] || letter} />
      ))}
    </div>
  );
}
