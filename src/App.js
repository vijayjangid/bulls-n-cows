import { Footer, Header } from "./components";
import { useDarkMode } from "./hooks";
import GameArea from "./containers/game-area";
import { SecretContextProvider } from "./state/secret-context";

function App() {
  const { darkMode } = useDarkMode();
  const themeClass = darkMode ? "dark app" : "app";
  return (
    <SecretContextProvider>
      <div className={themeClass}>
        <div className="container">
          <Header />
          <GameArea />
          <Footer />
        </div>
      </div>
    </SecretContextProvider>
  );
}

export default App;
