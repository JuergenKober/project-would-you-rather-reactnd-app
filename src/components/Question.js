import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';

class Question extends Component {


  render() {
    const { question, author } = this.props;

    return (
      <div>
        <div>
          {author.name} asks, would you rather be
          <br />
          QUESTION ID: {question.id}
          <br />
          {question.optionOne.text}...?
          <br />
          or
          <br />
          {question.optionTwo.text}...?
          <br />
          {formatDate(question.timestamp)}
        </div>
      </div>
    )
  }
};

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(Question);
