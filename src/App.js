import "./App.css";
import Main from "./Container/Main";
import { CountProvider } from "./Contexts/Count";

function App() {
  return (
    <CountProvider>
      <Main />
    </CountProvider>
  );
}

export default App;
