import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Button from "@mui/material/Button";
import Popup from "./PopUp";
import { data } from "./Data";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      total: data.length,
      showButton: false,
      questionAnswered: false,
      score: 0,
      displayPopup: "flex",
    };
    // this.nextQuestion = this.nextQuestion.bind(this);
    // this.handleShowButton = this.handleShowButton.bind(this);
    // this.handleStartQuiz = this.handleStartQuiz.bind(this);
    // this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }
  handleStartQuiz() {
    this.setState({
      displayPopup: false,
      count: 1,
    });
  }

  render() {
    return (
      <div className="home-page">
        <div className="container">
          <Popup
            style={{ display: this.state.displayPopup }}
            score={this.state.score}
            total={this.state.total}
            startQuiz={this.handleStartQuiz}
          />

          <div className="levels">
            {/* <Button className="btn" variant="contained">
            Easy
          </Button>
          <Button className="btn" variant="contained">
            Medium
          </Button>
          <Button className="btn" variant="contained">
            Hard
          </Button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
