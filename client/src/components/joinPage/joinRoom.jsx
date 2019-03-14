import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  JoinRoomButton,
  JoinRoomContainer,
  JoinRoomBody,
  WelcomeHeader
} from './joinRoom_styleComponents';
import * as actions from '../../actions/battleActions';

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const JoinRoom = props => {
  return (
    <JoinRoomBody>
      <JoinRoomContainer>
        <WelcomeHeader>Player One, are you ready?</WelcomeHeader>
        <Link to="/battle">
          <JoinRoomButton>Battle to The Death</JoinRoomButton>
        </Link>
      </JoinRoomContainer>
    </JoinRoomBody>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinRoom);
