import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class QuestionNew extends Component {
  state = {
    errorMsg: ''
  };

  handleSubmit = (id, event) => {
    const { dispatch } = this.props;

    event.preventDefault();

    console.log('form submitted');

  }

  render() {
    const { errorMsg } = this.state;

    return (
      <Fragment>
        Add a question
      </Fragment>
    )
  }
};

export default connect()(QuestionNew);
