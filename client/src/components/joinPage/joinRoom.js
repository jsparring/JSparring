import React from "react";
import { connect } from "react-redux";
import {
  JoinRoomButton,
  JoinRoomContainer,
  JoinRoomBody,
  WelcomeHeader
} from "./joinRoom_styleComponents";
import * as actions from "../../actions/battleActions";
import { Link } from "react-router-dom";

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class JoinRoom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <JoinRoomBody>
        <JoinRoomContainer>
          <WelcomeHeader>Player One, are you ready?</WelcomeHeader>
          <Link to="/battle">
            <JoinRoomButton>Battle To The Death</JoinRoomButton>
          </Link>
        </JoinRoomContainer>
      </JoinRoomBody>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinRoom);
