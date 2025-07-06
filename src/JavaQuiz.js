// ---------- JavaQuiz.js ----------
import React from 'react';
import QuizComponent from './QuizComponent';

const javaQuestions = [
  { question: "Which keyword is used to define a class in Java?", options: ["class", "Class", "define"], correct: "class" },
  { question: "Which method is the entry point in Java?", options: ["start()", "main()", "init()"], correct: "main()" },
  { question: "What is the size of int in Java?", options: ["4 bytes", "2 bytes", "8 bytes"], correct: "4 bytes" },
  { question: "Which company originally developed Java?", options: ["Sun Microsystems", "Oracle", "Microsoft"], correct: "Sun Microsystems" },
  { question: "What is JVM?", options: ["Java Visual Machine", "Java Virtual Machine", "Java Verified Machine"], correct: "Java Virtual Machine" },
  { question: "Which keyword is used to inherit a class in Java?", options: ["implements", "extends", "inherits"], correct: "extends" },
  { question: "Which access modifier makes a member accessible within the same package?", options: ["private", "public", "default"], correct: "default" },
  { question: "What is the default value of a boolean variable in Java?", options: ["true", "false", "0"], correct: "false" },
  { question: "Which of these is not a primitive type in Java?", options: ["String", "int", "boolean"], correct: "String" },
  { question: "What does 'final' keyword mean in Java?", options: ["Value can be modified", "Method can be overridden", "Value cannot be changed"], correct: "Value cannot be changed" }
];

export default function JavaQuiz() {
  return <QuizComponent questions={javaQuestions} title="Java Quiz" />;
}