import React from 'react';
import {
  YouLoseContainer,
  YouLoseContent,
  YouLoseImage,
  YouLoseHead
} from '../styleComponents/styleComponents';

class YouLose extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <YouLoseContainer>
        <YouLoseContent>
          <YouLoseHead>YOU LOSE</YouLoseHead>
          <YouLoseImage src="https://thumbs.gfycat.com/ApprehensiveOddballAgama-small.gif" />
        </YouLoseContent>
      </YouLoseContainer>
    );
  }
}

export default YouLose;
