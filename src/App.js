import Wrapper from "./components/Wrapper";
import "./App.css";
import { DarkModeProvider } from "./context";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
      <Wrapper />
    </DarkModeProvider>
    </div>
  );
}

export default App;
