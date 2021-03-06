import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';
import QuestionStats from './QuestionStats';
import { useParams } from 'react-router-dom';

const QuestionPage = ({answersByUser}) => {
  const { id } = useParams();
  const isAnswered = answersByUser.hasOwnProperty(id) ? true : false;

  return (
    <Fragment>
      {isAnswered
        ? <QuestionStats id={id} />
        : <QuestionForm id={id} />
      }
    </Fragment>
  )
}


function mapStateToProps ({ authedUser, users }) {

  const answersByUser = users[authedUser].answers;

  return {
    answersByUser
  };
}

export default connect(mapStateToProps)(QuestionPage);
