import React from "react";
import { connect } from "react-redux";
import {
  JoinRoomButton,
  JoinRoomContainer,
  JoinRoomBody,
  WelcomeHeader
} from "./joinRoom_styleComponents";
import * as actions from "../../actions/battleActions";

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    joinRoom: username => {
      dispatch(actions.joinRoom(username));
    }
  };
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
          <JoinRoomButton onClick={() => this.props.joinRoom("marlon")}>
            Battle To The Death
          </JoinRoomButton>
        </JoinRoomContainer>
      </JoinRoomBody>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinRoom);
