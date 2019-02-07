import React from 'react';
import { connect } from 'react-redux';
import {
  YouLoseContainer,
  YouLoseContent,
  YouLoseImage,
  YouLoseHead
} from '../styleComponents/styleComponents';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YouLose);
