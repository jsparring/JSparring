import React from 'react';
import { connect } from 'react-redux';
import {
  LoginBody,
  LoginHeader,
  LoginContainer,
  Description,
  GithubButton
} from '../styleComponents/styleComponents';
import * as loginInputActions from '../../actions/loginActions';
import * as userInfoActions from '../../actions/userInfoActions';
import styled from 'styled-components';
import { throws } from 'assert';

const Input = styled.input``;

const mapStateToProps = store => {
  const state = store.loginInput.toJS();
  return {
    inputUsername: state.inputUsername,
    inputPassword: state.inputPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeUsernameInput: username => {
      dispatch(loginInputActions.changeUsernameInput(username));
    },
    changePasswordInput: password => {
      dispatch(loginInputActions.changePasswordInput(password));
    },
    addUsernameToInfo: username => {
      dispatch(userInfoActions.addUsernameToInfo(username));
    }
  };
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  handleSubmit() {
    console.log("I'm running");
    const { inputUsername, inputPassword } = this.props;
    const body = { username: inputUsername, password: inputPassword };
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'passed') {
          this.props.addUsernameToInfo(res.username);
        } else {
          console.log(res);
        }
      })
      .catch(err => console.log(err));
  }

  changeUsername(value) {
    console.log('Username: ', value.target.value);
    this.props.changeUsernameInput(value.target.value);
  }
  changePassword(value) {
    console.log('Password: ', value.target.value);
    this.props.changePasswordInput(value.target.value);
  }

  render() {
    return (
      <LoginBody>
        <LoginContainer>
          <LoginHeader>JSPARRING</LoginHeader>
          <Description>
            Head to head algorithm solving. May the best code win!
          </Description>
          <label>
            Username:
            <Input
              type="text"
              value={this.props.inputUsername}
              onChange={this.changeUsername}
            />
          </label>
          <label>
            Password:
            <Input
              type="password"
              value={this.props.inputPassword}
              onChange={this.changePassword}
            />
          </label>
          <GithubButton onClick={this.handleSubmit}>LOGIN</GithubButton>
        </LoginContainer>
      </LoginBody>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
