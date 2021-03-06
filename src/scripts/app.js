import React from 'react';
import ReactDOM from 'react-dom';


console.log('App.js is running!');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js!</p>;
let template = React.createElement(
  "h1",
  { id: "someid" },
  "Something new"
);
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
