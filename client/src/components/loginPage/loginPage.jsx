import React from 'react';
import { connect } from 'react-redux';
import {
  LoginBody,
  LoginHeader,
  LoginContainer,
  Description,
  GithubButton
} from '../styleComponents/styleComponents';
import firebase from '../../../../firebaseConfig';
import { gitProvider } from '../../../../firebaseConfig';
import * as authActions from '../../actions/authActions';

const mapStateToProps = store => {
  const state = store.userReducer.toJS();
  return {
    isLoggedIn: state.isLoggedIn,
    username: state.username,
    photoURL: state.photoURL
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsername: userData => {
      dispatch(authActions.fetchUsername(userData));
    }
  };
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.githubLogin = this.githubLogin.bind(this);
  }

  githubLogin() {
    firebase
      .auth()
      .signInWithPopup(gitProvider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;
        const userData = {};
        userData.email = user.email;
        userData.uid = user.uid;
        userData.photo = user.photoURL;
        this.props.fetchUsername(userData);
      });
  }

  render() {
    return (
      <LoginBody>
        <LoginContainer>
          <LoginHeader>JSPARRING</LoginHeader>
          <Description>
            Head to head algorithm solving. May the best code win!
          </Description>
          <GithubButton onClick={this.githubLogin}>
            LOGIN WITH GITHUB
          </GithubButton>
        </LoginContainer>
      </LoginBody>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
