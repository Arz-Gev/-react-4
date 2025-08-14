import Context from "./components/Context/ContextProvider";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <Context>
      <Header />
    </Context>
  );
}

export default App;
