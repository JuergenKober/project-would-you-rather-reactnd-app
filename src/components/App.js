import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Login from './Login';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

  render() {
    const { authedUser } = this.props;

    if (authedUser === undefined) {
      console.log('no authedUser');
    } else {
      console.log(authedUser);
    }

    return (
      <div>
      {authedUser === undefined
        ? <Login />
        : <Home />}
      </div>
    )
  }
};

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
