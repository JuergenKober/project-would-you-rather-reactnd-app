import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import { handleInitialData } from '../actions/shared';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends Component {
  componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
        {this.props.loading === true
          ? null
          : <Home />}
        </Row>
      </Container>
    )
  }
};

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
