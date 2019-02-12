import React from 'react';
import { connect } from 'react-redux';
import LoginPage from '../loginPage/loginPage.jsx';
import JoinPage from '../joinPage/joinRoom';

const mapStateToProps = store => {
  const state = store.userReducer.toJS();
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let isLoggedIn = this.props.isLoggedIn;
    let content;

    if (!isLoggedIn) {
      content = <LoginPage />;
    } else {
      content = <JoinPage />;
    }
    return <div>{content}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
