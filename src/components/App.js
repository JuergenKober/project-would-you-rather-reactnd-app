import React, { Component } from 'react';
import { connect } from 'react-redux';
import WouldYouRatherApp from './WouldYouRatherApp';
import Login from './Login';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

  render() {
    const { authedUser } = this.props;

    return (
      <div>
      {!authedUser
        ? <Login />
        : <WouldYouRatherApp />
      }
      </div>
    )
  }
};

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
