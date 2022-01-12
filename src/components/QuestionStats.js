import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class QuestionForm extends Component {


  render() {
    const { question, author } = this.props;

    return (
      <Row>
        <Card>
          <Card.Header>
            STATS {author.name} asks, would you rather
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {question.optionOne.text}...?
              <br />
              or
              <br />
              {question.optionTwo.text}...?
            </Card.Text>
            <Card.Link href="#">Link to detail</Card.Link>
          </Card.Body>
          <Card.Footer>
					  {formatDate(question.timestamp)}
					</Card.Footer>
        </Card>
      </Row>
    )
  }
};

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(QuestionForm);
