import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

  render() {
    return (
      <div>
        <Home />
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
