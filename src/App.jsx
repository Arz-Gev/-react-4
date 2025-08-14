import Context from "./components/Context/ContextProvider";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import "./App.css";

function App() {
  return (
    <Context>
      <Header />
      <Welcome></Welcome>
    </Context>
  );
}

export default App;
