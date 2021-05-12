import { Footer, Header } from "./components";
import { useDarkMode } from "./hooks";
import GameArea from "./containers/game-area";
import { SecretContextProvider } from "./state/secret-context";
import { GameStatsContextProvider } from "./state/game-stats-context";

function App() {
  const { darkMode } = useDarkMode();
  const themeClass = darkMode ? "dark app" : "app";
  return (
    <div className={themeClass}>
      <div className="container">
        <SecretContextProvider>
          <GameStatsContextProvider>
            <Header />
            <GameArea />
          </GameStatsContextProvider>
        </SecretContextProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
