import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import HomePage from './components/homePage/homePage.jsx';
import BattlePage from './components/battlePage/battlePage.jsx';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/battle" component={BattlePage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
