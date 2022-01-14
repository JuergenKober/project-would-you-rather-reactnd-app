import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

class QuestionForm extends Component {


  render() {
    const { question, author, authedUser } = this.props;
    const { optionOne, optionTwo, timestamp } = question;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOnePercent = Math.round((optionOne.votes.length / totalVotes) * 100);
		const optionTwoPercent = Math.round((optionTwo.votes.length / totalVotes) * 100);
    const alertBoxColorOne = optionOne.votes.includes(authedUser) ? 'success' : 'light';
    const alertBoxColorTwo = optionTwo.votes.includes(authedUser) ? 'success' : 'light';

    return (
      <Row>
        <Col>
          <Card>
            <Card.Header>
              {author.name} asks, would you rather
            </Card.Header>
            <Card.Body>
              <Alert variant={alertBoxColorOne}>
                <Card.Text>
                  {optionOne.text}...?<br />
                  chosen by {optionOne.votes.length} out of {totalVotes}{' '}
                  users
                  ({optionOnePercent}%)
                </Card.Text>
              </Alert>
              <Alert variant={alertBoxColorTwo}>
                <Card.Text>
                  {optionTwo.text}...?<br />
                  chosen by {optionTwo.votes.length} out of {totalVotes}{' '}
                  users
                  ({optionTwoPercent}%)
                </Card.Text>
              </Alert>
            </Card.Body>
            <Card.Footer>
  					  {formatDate(question.timestamp)}
  					</Card.Footer>
          </Card>
        </Col>
      </Row>
    )
  }
};

function mapStateToProps({ questions, users, authedUser }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
    authedUser
	};
}

export default connect(mapStateToProps)(QuestionForm);
