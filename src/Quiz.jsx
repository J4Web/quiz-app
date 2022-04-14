import React, { Component } from "react";
import Keyboard from "./Keyboard";
import "./Quiz.css";
class Quiz extends Component {
  render() {
    const { question } = this.props.question;
    const q = this.props.question;
    return (
      <div className="quiz-container">
        <div className="content">
          <h1>Quiz page</h1>
          <h3>{question}</h3>
          <Keyboard
            ans={q}
            check={this.props.click}
            destroy={this.props.destroy}
          />
        </div>
      </div>
    );
  }
}
export default Quiz;
