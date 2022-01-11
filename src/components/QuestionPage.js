import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Question from './Question';

class QuestionPage extends Component {
  render() {
    const id = '8xf0y6ziyjabvozdd253nd';

    return (
      <Fragment>
        <Header />
        <Question id={id} />
      </Fragment>
    )
  }
};

function mapStateToProps ({ authedUser, users }) {

  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(QuestionPage)
