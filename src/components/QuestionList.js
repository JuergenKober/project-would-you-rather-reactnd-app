import React, { Component, Fragment } from 'react';
import QuestionTeaser from './QuestionTeaser';

class QuestionList extends Component {

  render() {
    return (
      <Fragment>
        {this.props.questionIds.map((id) => (
          <QuestionTeaser key={id} id={id} />
        ))}
      </Fragment>
    )
  }
}

export default QuestionList;
