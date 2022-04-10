const data = [
  {
    question:
      "We can go for keys when there is possibility that our user could change the data?",
    answers: "Keys",
  },

  {
    question: "JSX is typesafe? True/False ?",
    answers: "True",
  },
  {
    question:
      "React merges the object you provide into the current state using which of the following",
    answers: "setState",
  },
  {
    question: "Arbitrary inputs of components are called?",
    answers: "Props",
  },
  {
    question:
      "_____ can be done while more than one element needs to be returned from a component?",
    answers: "Wrapping",
  },
  {
    question:
      "Which of the following needs to be updated to achieve dynamic UI updates?",
    answers: "State",
  },
  {
    question: "Lifecycle methods are mainly used to track_____ ?",
    answers: "History",
  },
];

function PickRandomQuestion() {
  const random = Math.floor(Math.random() * data.length) + 1;
  return data[random];
}
export { data };
export default PickRandomQuestion;
