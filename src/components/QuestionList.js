import React, { Component, Fragment } from 'react';
import Question from './Question';

class QuestionList extends Component {

  render() {
    return (
      <div>
        {this.props.questionIds.map((id) => (
          <li key={id}>
            <Question key={id} id={id} />
          </li>
        ))}
      </div>
    )
  }
}

export default QuestionList;
