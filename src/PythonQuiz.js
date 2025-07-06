// ---------- PythonQuiz.js ----------
import React from 'react';
import QuizComponent from './QuizComponent';

const pythonQuestions = [
  { question: "What is the correct file extension for Python files?", options: [".py", ".pt", ".pyt"], correct: ".py" },
  { question: "Which keyword is used to create a function in Python?", options: ["function", "def", "fun"], correct: "def" },
  { question: "How do you insert comments in Python code?", options: ["/* comment */", "# comment", "// comment"], correct: "# comment" },
  { question: "What data type is the object below? `x = [1, 2, 3]`", options: ["Tuple", "List", "Set"], correct: "List" },
  { question: "How do you start a for loop in Python?", options: ["foreach x in y", "for x in y:", "for (x in y)"], correct: "for x in y:" },
  { question: "Which operator is used for exponentiation?", options: ["^", "**", "exp"], correct: "**" },
  { question: "Which of the following is a mutable type?", options: ["tuple", "int", "list"], correct: "list" },
  { question: "What does the len() function do?", options: ["Returns the type", "Returns the size", "Returns the length"], correct: "Returns the length" },
  { question: "Which function converts a string to an integer?", options: ["str()", "int()", "float()"], correct: "int()" },
  { question: "Which keyword is used for exception handling?", options: ["catch", "try", "throw"], correct: "try" }
];

export default function PythonQuiz() {
  return <QuizComponent questions={pythonQuestions} title="Python Quiz" />;
}