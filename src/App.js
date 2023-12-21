import "./App.css";
import "./components/Greet";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
function App() {
  return (
    <div className="App">
      {/* <Greet name="John">
        <button>action</button>
      </Greet>
      <Greet name="Mary">
        <p> - bye</p>
      </Greet> */}

      <Message />
    </div>
  );
}

export default App;
