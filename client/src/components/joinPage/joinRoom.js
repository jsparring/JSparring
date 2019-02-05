import React from "react";
import { connect } from "react-redux";
import { JoinRoomButton } from "./joinRoom_styleComponents";
import * as actions from "../../actions/sockets/actions";

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
      <div>
        <JoinRoomButton onClick={() => this.props.joinRoom("marlon")} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinRoom);
