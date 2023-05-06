import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  total = 0;
  incrementReviews = event => {
    let name = event.currentTarget.textContent;

    this.countTotalFeedback();

    this.setState(prevState => {
      if (name === 'Good') {
        return { good: prevState.good + 1 };
      }
      if (name === 'Neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (name === 'Bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };
  countTotalFeedback = () => {
    this.total += 1;
  };
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.total) * 100);

  render() {
    return (
      <div className={css.feedback}>
        <div>
          <Section title="Please leave feedback"></Section>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.incrementReviews}
          ></FeedbackOptions>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
          {this.total === 0 && (
            <Notification message="There is no feedback"></Notification>
          )}
        </div>
      </div>
    );
  }
}
