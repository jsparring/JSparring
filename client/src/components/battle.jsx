import React from 'react';
import { connect } from 'react-redux';
import HeadToHead from './headToHeadFolder/headToHead.jsx';
import YouLose from './headToHeadFolder/youLose.jsx';
import Modal from './headToHeadFolder/modal.jsx';

const mapStateToProps = store => {
  const state = store.battleReducer.toJS();
  return {
    youLose: state.youLose,
    showModal: state.showModal,
    showIde: state.showIde
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class Battle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content;
    let youLose = this.props.youLose;
    let showModal = this.props.showModal;
    let showIde = this.props.showIde;

    if (youLose) {
      content = <YouLose />;
    } else if (showModal) {
      content = <Modal />;
    } else if (showIde) {
      content = <HeadToHead />;
    }

    return <div>{content}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battle);
