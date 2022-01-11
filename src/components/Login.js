import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {



  componentDidMount() {
    const { dispatch } = this.props;
    const AUTHED_ID = 'tylermcginnis';
		dispatch(setAuthedUser(AUTHED_ID));
	}

  render() {
    return (
      <div>
        Login
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
   dispatch
})


export default connect(null, mapDispatchToProps)(Login);
