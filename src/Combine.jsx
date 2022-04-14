import React, { Component } from "react";
import Quiz from "./Quiz";
import Keyboard from "./Keyboard";
import PickRandomQuestion from "./Data";

class Combine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ques: PickRandomQuestion(),
      exist: true,
    };
    this.check = this.check.bind(this);
    this.destroy = this.destroy.bind(this);
  }
  destroy(val) {
    this.setState({
      exist: val > 9 ? false : true,
    });
  }
  check() {
    this.setState({ ques: PickRandomQuestion() });
  }
  render() {
    return (
      <div>
        {this.state.exist ? (
          <Quiz
            question={this.state.ques}
            click={this.check}
            destroy={this.destroy}
          />
        ) : (
          <div>
            <h1>Congratulations! You passed the quiz...</h1>
            <button>Retake!</button>
          </div>
        )}
      </div>
    );
  }
}

export default Combine;
