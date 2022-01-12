import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import QuestionForm from './QuestionForm';
import QuestionStats from './QuestionStats';
import { useParams } from 'react-router-dom';

const QuestionPage = ({authedUser, users}) => {
  const { id } = useParams();
  console.log('id from params: ', id)

  return (
    <Fragment>
      <Header />
      <QuestionStats id={id} />
    </Fragment>
  )
}


function mapStateToProps ({ authedUser, users }) {

  const answersByUser = users[authedUser].answers;
  //const id = '8xf0y6ziyjabvozdd253nd';
  console.log(answersByUser);

  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(QuestionPage);
