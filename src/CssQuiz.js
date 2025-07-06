// ---------- CssQuiz.js ----------
import React from 'react';
import QuizComponent from './QuizComponent';

const cssQuestions = [
  { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"], correct: "Cascading Style Sheets" },
  { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>"], correct: "<style>" },
  { question: "Which is the correct CSS syntax?", options: ["{body:color=black;}", "body {color: black;}", "{body;color:black;}"], correct: "body {color: black;}" },
  { question: "How do you insert a comment in CSS?", options: ["// comment", "/* comment */", "# comment"], correct: "/* comment */" },
  { question: "Which property changes background color?", options: ["bg-color", "background-color", "color"], correct: "background-color" },
  { question: "Which property changes text size?", options: ["font-style", "font-size", "text-style"], correct: "font-size" },
  { question: "How to make text bold?", options: ["font-weight: bold;", "font-size: bold;", "text-weight: bold;"], correct: "font-weight: bold;" },
  { question: "Which selects element with ID 'demo'?", options: [".demo", "#demo", "*demo"], correct: "#demo" },
  { question: "How to hide an element?", options: ["display: none;", "visibility: none;", "hidden: true;"], correct: "display: none;" },
  { question: "Which property sets font of element?", options: ["font-family", "font-size", "font-style"], correct: "font-family" }
];

export default function CssQuiz() {
  return <QuizComponent questions={cssQuestions} title="CSS Quiz" />;
}