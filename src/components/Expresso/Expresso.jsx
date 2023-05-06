import React, { Component } from 'react';
import css from './Expresso.module.css';

// import PropTypes from 'prop-types';

export default class Expresso extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  incrementReviewsGood = () => {
    this.countTotalFeedback();
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  incrementReviewsNeutral = () => {
    this.countTotalFeedback();
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  incrementReviewsBad = () => {
    this.countTotalFeedback();
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.total + 1 };
    });
  };
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.state.total) * 100);

  render() {
    return (
      <div className={css.feedback}>
        <p className={css.title}>Please leave feedback</p>
        <div className={css.buttonContainer}>
          <button onClick={this.incrementReviewsGood} className={css.button}>
            Good
          </button>
          <button onClick={this.incrementReviewsNeutral} className={css.button}>
            Neutral
          </button>
          <button onClick={this.incrementReviewsBad} className={css.button}>
            Bad
          </button>
        </div>
        <p>Statistics</p>
        <ul className={css.list}>
          <li className={css.item}>Good: {this.state.good}</li>
          <li className={css.item}>Neutral: {this.state.neutral}</li>
          <li className={css.item}>Bad: {this.state.bad}</li>
          <li className={css.item}>Total: {this.state.total}</li>
          <li className={css.item}>
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </li>
        </ul>
      </div>
    );
  }
}
