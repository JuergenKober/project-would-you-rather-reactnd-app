import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
}

function addAnswer({ qid, answer, authedUser }) {
	console.log('NOW DISPATCH', qid, answer, authedUser);
	return {
		type: ADD_ANSWER,
		answer: {
			qid,
			answer,
			authedUser
		}
	};
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}


export function handleAddQuestion (optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
    })
    .then((question) => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()))
  }
}

export function handleAddAnswer(qid, answer) {

	return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer({
			qid,
			answer,
			authedUser
    })
		.then(() => dispatch(
			addAnswer({qid, answer, authedUser}))
		)
  }
}
