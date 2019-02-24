import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import './app.css';
import LoginPage from './components/loginPage/loginPage';
import BattlePage from './components/battlePage/battlePage';
import JoinRoom from './components/joinPage/joinRoom';
import Navbar from './components/sharedComponents/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/battle" component={BattlePage} />
            <Route exact path="/join" component={JoinRoom} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
