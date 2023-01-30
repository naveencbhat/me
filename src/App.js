import "./App.css";
import SplitPane, { Pane } from "react-split-pane";
import Leftpane from "./components/leftpane";
import Rightpane from "./components/rightpane";
import Split from "react-split";

function App() {
  return (
    <div className="App app_gradient">
      <div className="leftpane">
        <Leftpane />
      </div>

      <div className="rightpane">
        <Rightpane />
      </div>
    </div>
  );
}

export default App;
