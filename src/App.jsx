import Context from "./components/Context/ContextProvider";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import LoginForm from "./components/LoginForm/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Context>
      <Header />
      <main className="main">
        <Welcome />
        <LoginForm />
        <Dashboard />
      </main>
    </Context>
  );
}

export default App;
