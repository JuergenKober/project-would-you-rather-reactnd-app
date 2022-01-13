import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class QuestionNew extends Component {
  state = {
		optionOne: '',
		optionTwo: '',
    errorMsg: ''
	};

  handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	};

  handleSubmit = (id, event) => {
    const { dispatch } = this.props;

    event.preventDefault();

    console.log('form submitted');

  }

  render() {
    const { errorMsg } = this.state;

    return (
      <Fragment>
        <h2>Would You Rather...</h2>
        <Row className="justify-content-center">
					<Col>
						<Card bg="light">
							<Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="optionOne">
                    <Form.Label>Option No. 1</Form.Label>
                    <Form.Control
                      type="text"
                      name="optionOne"
                      value={this.state.optionOne}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                  <h3>
                    <small>OR</small>
                  </h3>
                  <Form.Group controlId="optionTwo">
                    <Form.Label>Option No. 2</Form.Label>
                    <Form.Control
                      type="text"
                      name="optionTwo"
                      value={this.state.optionTwo}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="outline-dark"
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    )
  }
};

export default connect()(QuestionNew);
