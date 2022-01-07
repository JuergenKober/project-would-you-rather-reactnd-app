import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className='center'>Would you rather... ?</h1>
        <h3 className='center'>Answered Questions</h3>
        <ul className='dashboard-list'>
        {this.props.answeredQuestionIds.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
        </ul>
        <h3 className='center'>Unanswered Questions</h3>
        <ul className='dashboard-list'>
        {this.props.unansweredQuestionIds.map((id) => (
          <li key={id}>
            <div>QUESTION ID: {id}</div>
          </li>
        ))}
        </ul>
      </div>
    )
  }
};

function mapStateToProps ({ questions, authedUser, users }) {

  const answeredQuestionIds = Object.keys(questions)
    .filter((id) => users[authedUser].answers.hasOwnProperty(id))
     .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const unansweredQuestionIds = Object.keys(questions)
  .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
   .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestionIds,
    unansweredQuestionIds
  };
}

export default connect(mapStateToProps)(Home)
