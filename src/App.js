import "./App.css";
import "./components/Greet";
import { Greet } from "./components/Greet";
function App() {
  return (
    <div className="App">
      <Greet name="John">
        <button>action</button>
      </Greet>
      <Greet name="Mary">
        <p> - bye</p>
      </Greet>
    </div>
  );
}

export default App;
