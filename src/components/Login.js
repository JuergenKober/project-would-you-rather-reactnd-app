import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Login extends Component {
  state = {
		errorMsg: ''
	};

  handleSubmit = (event) => {
    const userID = this.userID.value;
		const { dispatch } = this.props;

    event.preventDefault();

    if (userID !== '') {
			dispatch(setAuthedUser(userID));
		} else {
			this.setState({ errorMsg: 'Please select a user from the dropdown menu' });
		}
  }

  render() {
    const { userNames } = this.props;
    const { errorMsg } = this.state;

    return (
      <Row className="justify-content-center">
        <Col md={10} xs={12}>
          <Card className="m-3">
            <Card.Body className="mx-3">

              <Form onSubmit={this.handleSubmit}>
                <Form.Label>Username</Form.Label>
                {errorMsg ? (
        				  <p className="text-danger">{errorMsg}</p>
        				) : null}

                <Form.Control as="select" ref={(id) => (this.userID = id)}>
                  <option value="">Please select a user</option>
                  {userNames.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Form.Control>
                <br />
                <Button type="submit" variant="outline-dark">
                  Login
                </Button>
              </Form>

        </Card.Body>
      </Card>
    </Col>
  </Row>
    )
  }
};

const mapDispatchToProps = dispatch => ({
   dispatch
})

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
