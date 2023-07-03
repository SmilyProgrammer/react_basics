import "./App.css";
import Welcome from "./components/Welcome";
// import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Diana" heroname="Wonder Woman" /> */}

      <Welcome name="Bruce" heroname="Batman" />
    </div>
  );
}

export default App;
