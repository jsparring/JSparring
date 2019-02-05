import React from "react";
import {
  LoginBody,
  LoginHeader,
  LoginContainer,
  Description,
  GithubButton
} from "../styleComponents/styleComponents";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  githubLogin() {
    console.log("hi");
    fetch("http://localhost:8000/github_login")
      .then(res => console.log(res))
      .catch(err => console.log(err));
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

export default LoginPage;
