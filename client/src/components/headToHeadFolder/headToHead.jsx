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
  UsernameDisplay,
  ResultText
} from '../styleComponents/styleComponents';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const mapStateToProps = store => {
  const state = store.battleReducer.toJS();
  const userState = store.userReducer.toJS();
  return {
    leftCode: state.leftCode,
    rightCode: state.rightCode,
    roomId: state.roomId,
    leftDescription: state.leftDescription,
    rightDescription: state.rightDescription,
    challengeName: state.challengeName,
    ideVisibility: state.ideVisibility,
    modalVisibility: state.modalVisibility,
    youLoseVisibility: state.youLoseVisibility,
    username: userState.username,
    opponentName: state.opponentName,
    passedTests: state.passedTests,
    resultPicture: state.resultPicture,
    resultHeader: state.resultHeader,
    resultText: state.resultText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveLeftCode: value => {
      dispatch(battleActions.saveLeftCode(value));
    },
    joinRoom: username => {
      dispatch(battleActions.joinRoom(dispatch, username));
    },
    submitCode: (challengeName, code) => {
      dispatch(battleActions.submitCode(challengeName, code));
    },
    test: () => {
      dispatch(battleActions.passedTests('xyz'));
    }
  };
};

class HeadToHead extends React.Component {
  constructor(props) {
    super(props);
    this.leftCode = this.leftCode.bind(this);
  }

  leftCode(editor, data, value) {
    this.props.saveLeftCode(value);
  }

  componentDidMount() {
    this.props.joinRoom();
  }

  render() {
    return (
      <div className="battleBody">
        <Head2headContainer>
          <PlayerContainer id="leftPlayerContainer">
            <UsernameDisplay>{this.props.username}</UsernameDisplay>
            <div className="desc-cont">
              <DescriptionContainer>
                {this.props.leftDescription}
              </DescriptionContainer>
            </div>
            <CodeMirror
              id="left-codemirror"
              // value={this.props.leftCode}
              options={{
                mode: 'javascript',
                theme: 'erlang-dark',
                lineNumbers: true
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
            <ResultText>{this.props.resultText}</ResultText>
          </PlayerContainer>
          <PlayerContainer id="rightPlayerContainer">
            <UsernameDisplay>{this.props.opponentName}</UsernameDisplay>
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
                theme: 'erlang-dark',
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
)(HeadToHead);
