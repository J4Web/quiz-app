const data = [
  {
    question:
      "We can go for keys when there is possibility that our user could change the data?",
    answers: "keys",
  },

  {
    question: "JSX is typesafe? True/False ?",
    answers: "true",
  },
  {
    question:
      "React merges the object you provide into the current state using which of the following",
    answers: "setstate",
  },
  {
    question: "Arbitrary inputs of components are called?",
    answers: "props",
  },
  {
    question:
      "_____ can be done while more than one element needs to be returned from a component?",
    answers: "wrapping",
  },
  {
    question:
      "Which of the following needs to be updated to achieve dynamic UI updates?",
    answers: "state",
  },
  {
    question: "Lifecycle methods are mainly used to track_____ ?",
    answers: "history",
  },
];

function PickRandomQuestion() {
  const random = Math.floor(Math.random() * data.length);
  return data[random];
}
export { data };
export default PickRandomQuestion;
