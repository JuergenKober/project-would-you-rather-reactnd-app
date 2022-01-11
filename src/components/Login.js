import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      <div>
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

          <Button type="submit" variant="outline-dark">
            Login
          </Button>
        </Form>
      </div>
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
