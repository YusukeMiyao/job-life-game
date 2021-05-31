// import NameEntry from "./components/NameEntry";
import { AllContextProveider } from "./components/Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NameEntry from "./components/NameEntry";
import Game from "./components/Game";
// import { DataReducer } from "./components/reducer/DataReducer";

function App() {
  return (
    <Router>
      <Switch>
        <AllContextProveider>
          <Route exact path="/" component={NameEntry} />
          <Route exact path="/game" component={Game} />
        </AllContextProveider>
      </Switch>
    </Router>
  );
}

export default App;
