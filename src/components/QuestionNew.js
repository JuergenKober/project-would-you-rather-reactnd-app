import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { handleAddQuestion } from '../actions/questions';
import { Navigate } from 'react-router-dom';

class QuestionNew extends Component {
  state = {
		optionOne: '',
		optionTwo: '',
    errorMsg: '',
    toHome: false
	};

  handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	};

  handleSubmit = (event) => {
    const { dispatch } = this.props;
    const { optionOne, optionTwo } = this.state;

    event.preventDefault();

    if (optionOne !== '' && optionTwo !== '') {
      dispatch(handleAddQuestion(optionOne, optionTwo));
    } else {
      this.setState({ errorMsg: 'Please enter the two options for your question' });
    }

    this.setState(() => ({
      optionOne: '',
  		optionTwo: '',
      errorMsg: '',
      toHome: true
    }))
  }

  render() {
    const { optionOne, optionTwo, errorMsg, toHome } = this.state;

    if (toHome === true) {
      return <Navigate to='/' />
    }
    
    return (
      <Fragment>
      <Row className="justify-content-center">
        <Col md={10} xs={12}>
          <Card bg="light" className="m-3">
            <Card.Header>

        <h2>Would You Rather...</h2>
        </Card.Header>
							<Card.Body>
                <Form onSubmit={this.handleSubmit}>
                {errorMsg ? (<Alert variant="danger">{errorMsg}</Alert>) : null}
                  <Form.Group controlId="optionOne">
                    <Form.Label>Option No. 1</Form.Label>
                    <Form.Control
                      type="text"
                      name="optionOne"
                      value={this.state.optionOne}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                  <br />
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
                  <br />
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
