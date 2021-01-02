import React from 'react';
import ReactDOM from 'react-dom';


console.log('App.js is running!');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js!</p>;



class Indecision extends React.Component {
    render() {
        return (
            <div className="hello">
                <h1>HELLO</h1>
            </div>
        );
    }
}







ReactDOM.render(
    <Indecision />,
    document.getElementById('root')
);