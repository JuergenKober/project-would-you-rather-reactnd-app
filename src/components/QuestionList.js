import React, { Component, Fragment } from 'react';
import QuestionTeaser from './QuestionTeaser';
import Row from 'react-bootstrap/Row';

class QuestionList extends Component {

  render() {
    return (
      <Row className="justify-content-md-center">
        {this.props.questionIds.map((id) => (
          <li key={id}>
            <QuestionTeaser key={id} id={id} />
          </li>
        ))}
      </Row>
    )
  }
}

export default QuestionList;
