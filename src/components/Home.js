import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
          <Tab eventKey="unanswered" title="Unanswered Questions">
            <QuestionList questionIds={this.props.unansweredQuestionIds} />
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <QuestionList questionIds={this.props.answeredQuestionIds} />
          </Tab>
        </Tabs>
      </Fragment>
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
