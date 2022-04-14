import React, { Component } from "react";
import MyButton from "./MyButton";
import Fade from "react-reveal/Fade";
// import { useNavigate } from "react-router-dom";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "start",
      title: "Welcome to React Quiz",
      text: "This is a quiz application built using ReactJS. <br /><br />",
      buttonText: "Start the quiz",
    };

    this.popupHandle = this.popupHandle.bind(this);
  }

  popupHandle() {
    let time = this.state.time;
    this.props.startQuiz();

    if (time === "start") {
      this.setState({
        time: "end",
        title: "Congratulations!",
        buttonText: "Restart",
      });
      this.props.startQuiz();
      //alert("START THE QUIZ");
    } else {
      // alert("FINISHED QUIZ");
      // eslint-disable-next-line no-restricted-globals
      location.reload(); // restart the application
    }
  }

  createMarkup(text) {
    return { __html: text };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text:
        "You have completed the quiz. <br /> You got: <strong>" +
        this.props.score +
        "</strong> out of <strong>" +
        this.props.total +
        "</strong> questions right.",
    });
  }

  render() {
    let { title, text, buttonText } = this.state;

    let { style } = this.props;

    return (
      <Fade delay={500}>
        <div className="popup-container" style={style}>
          <div className="container">
            <div className="ml-5 col-md-10 col-10">
              <div className="popup">
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                <button onClick={this.popupHandle}>START THE QUIZ!</button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Popup;
