import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Question extends Component {


  render() {
    const { question, author } = this.props;

    return (
      <Row>
        <Card>
          <Card.Header>
            {author.name} asks, would you rather
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {question.optionOne.text}...?
              <br />
              or
              <br />
              {question.optionTwo.text}...?
            </Card.Text>
            <Link to={`/questions/${question.id}`}>
						  <Button>View Question</Button>
						</Link>
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

export default connect(mapStateToProps)(Question);
