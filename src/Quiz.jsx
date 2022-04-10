import React, { Component } from "react";
import Keyboard from "./Keyboard";
import "./Quiz.css";
import PickRandomQuestion, { Data } from "./Data";
class Quiz extends Component {
  render() {
    return (
      <div className="quiz-container">
        <div className="content">
          <h1>Quiz pagee</h1>
          {PickRandomQuestion().question}
          <Keyboard />
        </div>
      </div>
    );
  }
}

export default Quiz;
