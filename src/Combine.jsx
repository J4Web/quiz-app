import React, { Component } from "react";
import Quiz from "./Quiz";
import Keyboard from "./Keyboard";
import PickRandomQuestion from "./Data";
import WithRoutes from "./WithRoutes";
import { NavLink } from "react-router-dom";
class Combine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ques: PickRandomQuestion(),
      exist: true,
    };
    this.check = this.check.bind(this);
    this.destroy = this.destroy.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  destroy(val) {
    this.setState({
      exist: val + 1 > 9 ? false : true,
    });
    console.log(val);
  }
  check() {
    this.setState({ ques: PickRandomQuestion() });
  }
  handleClick() {
    // location.reload();
    console.log("end");
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
            <button onClick={this.handleClick}>Retake!</button>
          </div>
        )}
      </div>
    );
  }
}

export default WithRoutes(Combine);
