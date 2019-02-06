import React from "react";
import { connect } from "react-redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
import "./codemirror.css";
import { Head2headContainer } from "../styleComponents/styleComponents";
import * as battleActions from "../../actions/battleActions";
import {
  PlayerContainer,
  DescriptionContainer,
  SubmitBtn
} from "../styleComponents/styleComponents";

const mapStateToProps = store => {
  const state = store.battleReducer.toJS();
  return {
    leftCode: state.leftCode,
    rightCode: state.rightCode,
    roomId: state.roomId,
    leftDescription: state.leftDescription,
    rightDescription: state.rightDescription,
    challengeName: state.challengeName
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
      dispatch(battleActions.submitCode(challengeName, code))
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
    this.props.joinRoom("angry_jellyfish666");
  }

  render() {
    return (
      <div>
        <h3>{this.props.roomId}</h3>
        <Head2headContainer>
          <PlayerContainer id = 'leftPlayerContainer'>
            <div className = "desc-cont">          
             <DescriptionContainer>{this.props.leftDescription}</DescriptionContainer>
            </div>
            <CodeMirror
              id="left-codemirror"
              value={this.props.leftCode}
              options={{
                mode: "javascript",
                theme: "material",
                lineNumbers: true,
                autoCloseBrackets: true
              }}
              onChange={this.leftCode}
            />
            <SubmitBtn onClick = {() => this.props.submitCode(this.props.challengeName, this.props.leftCode)}>SUBMIT</SubmitBtn>
          </PlayerContainer>
          <PlayerContainer id = "rightPlayerContainer">
           <div className = "desc-cont">
            <DescriptionContainer>
              {this.props.right}
              </DescriptionContainer>
           </div>
            <CodeMirror
              id="right-codemirror"
              value={this.props.rightCode}
              options={{
                mode: "javascript",
                theme: "material",
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
