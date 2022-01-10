import React, { Component, Fragment } from 'react';
import Question from './Question';
import Row from 'react-bootstrap/Row';

class QuestionList extends Component {

  render() {
    return (
      <Row className="justify-content-md-center">
        {this.props.questionIds.map((id) => (
          <li key={id}>
            <Question key={id} id={id} />
          </li>
        ))}
      </Row>
    )
  }
}

export default QuestionList;
