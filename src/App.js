import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Content from "./Content";
import Home from "./Pages/Home";
import history from "./History";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/:id" exact={true}>
          <Content />
        </Route>
        <Route path="*">Page not found.</Route>
      </Switch>
    </Router>
  );
}

export default App;
