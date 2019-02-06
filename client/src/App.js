import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import LoginPage from './components/loginPage/loginPage';
import BattlePage from './components/battlePage/battlePage.jsx';
import JoinRoom from './components/joinPage/joinRoom';
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
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/battle" component={BattlePage} />
            <Route exact path="/join" component={JoinRoom} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
