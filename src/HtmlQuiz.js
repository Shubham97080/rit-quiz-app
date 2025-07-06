// ---------- HtmlQuiz.js ----------
import React from 'react';
import QuizComponent from './QuizComponent';

const htmlQuestions = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language"], correct: "Hyper Text Markup Language" },
  { question: "Who is making the Web standards?", options: ["Mozilla", "Microsoft", "The World Wide Web Consortium"], correct: "The World Wide Web Consortium" },
  { question: "Choose the correct HTML element for the largest heading:", options: ["<h6>", "<head>", "<h1>"], correct: "<h1>" },
  { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>"], correct: "<br>" },
  { question: "Which tag is used to define a hyperlink?", options: ["<a>", "<link>", "<href>"], correct: "<a>" },
  { question: "Which attribute is used to open a link in a new tab?", options: ["target='_blank'", "newtab", "href='_new'"], correct: "target='_blank'" },
  { question: "Which tag creates a numbered list?", options: ["<ul>", "<ol>", "<list>"], correct: "<ol>" },
  { question: "How can you make a checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<check>"], correct: "<input type='checkbox'>" },
  { question: "What does the <title> tag do?", options: ["Sets the heading", "Displays a popup", "Sets browser tab title"], correct: "Sets browser tab title" },
  { question: "Which tag is used to embed an image?", options: ["<img>", "<image>", "<pic>"], correct: "<img>" }
];

export default function HtmlQuiz() {
  return <QuizComponent questions={htmlQuestions} title="HTML Quiz" />;
}