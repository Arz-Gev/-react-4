import Context from "./components/Context/ContextProvider";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

function App() {
  return (
    <Context>
      <Header />
      <Welcome />
      <LoginForm />
    </Context>
  );
}

export default App;
