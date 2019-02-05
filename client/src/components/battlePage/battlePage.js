import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
import "./codemirror.css";
import { Head2headContainer } from "../styleComponents/styleComponents";

class BattlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  leftCode(editor, data, value) {
    console.log("left code: ", value);
  }

  rightCode(editor, data, value) {
    console.log("right code: ", value);
  }

  render() {
    return (
      <div>
        <Head2headContainer>
          <CodeMirror
            id="left-codemirror"
            value="// its sparring day"
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true
            }}
            onChange={this.leftCode}
          />
          <CodeMirror
            id="right-codemirror"
            value="// its sparring day"
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true
            }}
            onChange={this.rightCode}
          />
        </Head2headContainer>
      </div>
    );
  }
}

export default BattlePage;
