import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
}

function addAnswer({ qid, answer, authedUser }) {
	return {
		type: ADD_ANSWER,
		answer: {
			qid,
			answer,
			authedUser
		}
	};
}

export function handleAddAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		return saveQuestionAnswer({
			qid,
			answer,
			authedUser
		})
			.then(() =>
				dispatch(
					addAnswer({
						qid,
						answer,
						authedUser
					})
				)
			)
	};
}
