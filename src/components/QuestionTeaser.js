import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Question extends Component {

  render() {
    const { question, author } = this.props;

    return (
      <Row className="justify-content-center">
        <Col md={10} xs={12}>
          <Card className="m-3">
            <Card.Header>
              <Image
                src={author.avatarURL}
                roundedCircle
                fluid
                width="35"
                height="35"
                className="mx-3"
                alt={author.name}
              />
              <b>{author.name}</b> wants to know, would you rather...
            </Card.Header>
            <Card.Body className="mx-3">
              <Card.Text>
                {question.optionOne.text}...?
                <br />
                or {question.optionTwo.text}...?
              </Card.Text>
              <Link to={`/questions/${question.id}`}>
              <Button variant="info">
                  View Question
                </Button>
  						</Link>
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

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(Question);
