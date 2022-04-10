import React, { Component } from "react";
import "./Keyboard.css";
import PickRandomQuestion from "./Data";
export default class Keyboard extends Component {
  static defaultProps = {
    maxWrong: 6,
  };
  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: PickRandomQuestion().answers,
    };
    // this.handleGuess = this.handleGuess.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
  }
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  }
  restart() {
    this.setState((oldState) => ({
      nWrong: 0,
      guessed: new Set(),
      answer: "Happy",
    }));
  }
  handleRestartGame() {
    this.restart();
  }
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((k) => (
      <button
        value={k}
        key={k}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(k)}
      >
        {k}
      </button>
    ));
  }
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong ? 1 : 0;
    // const gameWon = this.guessedWord().join("") === this.state.answer ? 1 : 0;
    const gameWon = 0;
    return (
      <div className="Hangman">
        <p className="Hangman-btns">
          {!gameOver && !gameWon ? (
            this.generateButtons()
          ) : (
            <button id="restart-game" onClick={this.handleRestartGame}>
              Restart
            </button>
          )}
        </p>
      </div>
    );
  }
}
