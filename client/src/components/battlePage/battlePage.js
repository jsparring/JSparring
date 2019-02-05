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
  VertLine
} from "../styleComponents/styleComponents";

const mapStateToProps = store => {
  const state = store.battleReducer.toJS();
  return {
    leftCode: state.leftCode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveLeftCode: value => {
      dispatch(battleActions.saveLeftCode(value));
    },
    testCode: code => {
      dispatch(battleActions.testCode(code));
    }
  };
};

class BattlePage extends React.Component {
  constructor(props) {
    super(props);
    this.leftCode = this.leftCode.bind(this);
  }

  leftCode(editor, data, value) {
    // console.log("left code: ", value);
    this.props.saveLeftCode(value);
  }

  rightCode(editor, data, value) {
    console.log("right code: ", value);
  }

  render() {
    return (
      <div>
        <Head2headContainer>
          <PlayerContainer>
            <DescriptionContainer>this is a description</DescriptionContainer>
            <CodeMirror
              id="left-codemirror"
              value="// its sparring day"
              options={{
                mode: "javascript",
                theme: "material",
                lineNumbers: true,
                autoCloseBrackets: true
              }}
              onChange={this.leftCode}
            />
            <button onClick={() => this.props.testCode(this.props.leftCode)}>
              Evaluate
            </button>
          </PlayerContainer>
          <VertLine />
          <PlayerContainer>
            <DescriptionContainer>
              This is also a description
            </DescriptionContainer>
            <CodeMirror
              id="right-codemirror"
              value={this.props.leftCode}
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
