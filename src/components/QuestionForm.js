import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class QuestionForm extends Component {
  state = {
    errorMsg: ''
  };

  handleSubmit = (id, event) => {
    const answer = this.form.answer.value;
    const { dispatch } = this.props;

    event.preventDefault();

    console.log('form submitted, answer', answer);

  }

  render() {
    const { question, author } = this.props;
    const { errorMsg } = this.state;

    return (
      <Row>
        <Card>
          <Card.Header>
            {author.name} asks, would you rather
          </Card.Header>
          <Card.Body>
            <Form
								onSubmit={
                  (event) => this.handleSubmit(question.id, event)
                }
                ref={(f) => (this.form = f)}
							>
              {errorMsg ? (<p>{errorMsg}</p>) : null}
              <Form.Check
									custom="true"
									type="radio"
									id="optionOne"
									label={question.optionTwo.text}
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
