import React from 'react';
import { connect } from 'react-redux';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './codemirror.css';
import * as battleActions from '../../actions/battleActions';

import {
  Head2headContainer,
  PlayerContainer,
  DescriptionContainer,
  SubmitBtn,
  LoadingModal,
  ModalContent,
  ModalHeader,
  GifImg,
  UsernameDisplay
} from '../styleComponents/styleComponents';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const mapStateToProps = store => {
  const state = store.battleReducer.toJS();
  return {
    leftCode: state.leftCode,
    rightCode: state.rightCode,
    roomId: state.roomId,
    leftDescription: state.leftDescription,
    rightDescription: state.rightDescription,
    challengeName: state.challengeName,
    ideVisibility: state.ideVisibility,
    modalVisibility: state.modalVisibility,
    username: state.username,
    opponentUsername: state.opponentUsername
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveLeftCode: value => {
      dispatch(battleActions.saveLeftCode(value));
    },
    testCode: code => {
      dispatch(battleActions.testCode(code));
    },
    joinRoom: username => {
      dispatch(battleActions.joinRoom(dispatch, username));
    },
    submitCode: (challengeName, code) => {
      dispatch(battleActions.submitCode(challengeName, code));
    }
  };
};

class BattlePage extends React.Component {
  constructor(props) {
    super(props);
    this.leftCode = this.leftCode.bind(this);
  }

  leftCode(editor, data, value) {
    this.props.saveLeftCode(value);
  }

  componentDidMount() {
    this.props.joinRoom('angry_jellyfish666');
  }

  render() {
    return (
      <div className="battleBody">
        <LoadingModal style={{ visibility: this.props.modalVisibility }}>
          <ModalContent>
            <ModalHeader>Awaiting Opponent...</ModalHeader>
            <GifImg src="https://thumbs.gfycat.com/FrayedSeriousIchneumonfly.webp" />
          </ModalContent>
        </LoadingModal>
        <Head2headContainer style={{ visibility: this.props.ideVisibility }}>
          <PlayerContainer id="leftPlayerContainer">
            <UsernameDisplay>{this.props.username}</UsernameDisplay>
            <div className="desc-cont">
              <DescriptionContainer>
                {this.props.leftDescription}
              </DescriptionContainer>
            </div>
            <CodeMirror
              id="left-codemirror"
              value={this.props.leftCode}
              options={{
                mode: 'javascript',
                theme: 'material',
                lineNumbers: true,
                autoCloseBrackets: true
              }}
              onChange={this.leftCode}
            />
            <SubmitBtn
              onClick={() =>
                this.props.submitCode(
                  this.props.challengeName,
                  this.props.leftCode
                )
              }
            >
              SUBMIT
            </SubmitBtn>
          </PlayerContainer>
          <PlayerContainer id="rightPlayerContainer">
            <UsernameDisplay>{this.props.opponentUsername}</UsernameDisplay>
            <div className="desc-cont">
              <DescriptionContainer>
                {this.props.rightDescription}
              </DescriptionContainer>
            </div>
            <CodeMirror
              id="right-codemirror"
              value={this.props.rightCode}
              options={{
                mode: 'javascript',
                theme: 'material',
                lineNumbers: true
              }}
              onChange={this.rightCode}
            />
          </PlayerContainer>
        </Head2headContainer>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattlePage);
