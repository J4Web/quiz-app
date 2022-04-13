import React, { Component } from "react";
import "./Keyboard.css";
import PickRandomQuestion from "./Data";
import { NavLink } from "react-router-dom";
import level from "./Level";
import Quiz from "./Quiz";
export default class Keyboard extends Component {
  static defaultProps = {
    maxWrong: 3,
  };
  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      doneSoFar: 0,
      level: 0,
      guessed: new Set(),
      answer: PickRandomQuestion().answers,
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
  }
  guessedWord() {
    return this.state.answer
      .split("")
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
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
      answer: this.state.answer,
      doneSoFar: 0,
      level: 0,
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
  handleNextQuestion() {
    this.setState((curState) => ({
      answer: PickRandomQuestion().answers,
      doneSoFar: curState.doneSoFar + 1,
      guessed: new Set(),
    }));
  }
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong ? 1 : 0;
    const gameWon = this.guessedWord().join("") === this.state.answer ? 1 : 0;
    return (
      <div className="Hangman">
        <div className="level">{level(this.state.doneSoFar / 3)}</div>
        {!gameOver ? (
          <p className="Hangman-word">{this.guessedWord()}</p>
        ) : (
          <h2>{`The Word Was : ${this.state.answer}`}</h2>
        )}
        <p className="Hangman-btns">
          {!gameOver && !gameWon ? (
            this.generateButtons()
          ) : (
            <button
              id="restart-game"
              onClick={
                gameWon ? this.handleNextQuestion : this.handleRestartGame
              }
            >
              {gameWon ? "Next" : "Restart"}
            </button>
          )}
        </p>
      </div>
    );
  }
}
