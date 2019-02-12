import React from 'react';
import { connect } from 'react-redux';
import * as battleActions from '../../actions/battleActions';

import {
  LoadingModal,
  ModalContent,
  ModalHeader,
  GifImg
} from '../styleComponents/styleComponents';

const mapStateToProps = store => {
  const state = store.userReducer.toJS();
  return {
    username: state.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    joinRoom: username => {
      dispatch(battleActions.joinRoom(dispatch, username));
    }
  };
};

class Modal extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.joinRoom(this.props.username);
  }

  render() {
    return (
      <LoadingModal>
        <ModalContent>
          <ModalHeader>Awaiting Opponent...</ModalHeader>
          <GifImg src="https://thumbs.gfycat.com/FrayedSeriousIchneumonfly.webp" />
        </ModalContent>
      </LoadingModal>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
