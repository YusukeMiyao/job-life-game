// import NameEntry from "./components/NameEntry";
import { AllContextProveider } from "./components/Context"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NameEntry from "./components/NameEntry"
import Game from "./components/Game"
import { DataReducer } from "./components/reducer/DataReducer"
import { Awards } from "./components/Awards"

function App() {
  return (
    <Router>
      <Switch>
        <AllContextProveider>
          {/* <DataReducer /> */}
          <Route exact path="/" component={NameEntry} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/awards" component={Awards} />
        </AllContextProveider>
      </Switch>
    </Router>
  )
}

export default App
