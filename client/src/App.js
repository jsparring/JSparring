import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.css";
import LoginPage from "./components/loginPage/loginPage";
import BattlePage from "./components/battlePage/battlePage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/battle" component={BattlePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
