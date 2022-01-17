import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { handleAddAnswer } from '../actions/questions';
import PageNotFound from './PageNotFound';
import Alert from 'react-bootstrap/Alert';

import { setAuthedUser } from '../actions/authedUser';


class QuestionForm extends Component {
  state = {
    errorMsg: ''
  };

  handleSubmit = (id, event) => {
    const answer = this.form.answer.value;
    const { dispatch } = this.props;

    event.preventDefault();

    if (answer !== '') {
			dispatch(handleAddAnswer(id, answer));
		} else {
			this.setState({ errorMsg: 'Please choose an answer' });
		}
  }

  render() {
    const { question, author } = this.props;
    const { errorMsg } = this.state;

    if (question === null) {
			return <PageNotFound />;
		}

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
              <Form
  								onSubmit={
                    (event) => this.handleSubmit(question.id, event)
                  }
                  ref={(f) => (this.form = f)}
  							>
                {errorMsg ? (<Alert variant="danger">{errorMsg}</Alert>) : null}
                <Form.Check
  									custom="true"
  									type="radio"
  									id="optionOne"
  									label={question.optionOne.text}
  									value="optionOne"
  									name="answer"
  									className="mb-2"
  								/>
  								<Form.Check
  									custom="true"
  									type="radio"
  									id="optionTwo"
  									label={question.optionTwo.text}
  									value="optionTwo"
  									name="answer"
  									className="mb-2"
  								/>
  							<Button type="submit">
  								Your answer
  							</Button>
              </Form>
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

export default connect(mapStateToProps)(QuestionForm);
