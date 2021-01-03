import React from 'react';
import ReactDOM from 'react-dom';

class Indecision extends React.Component {
    render() {


        //Class variables
        // let template = (
        //     <div className="hello">
        //         <h1>Hello World!</h1>
        //         <ol>
        //             <li>Item one</li>
        //             <li>Item two</li>
        //         </ol>
        //     </div>
        // )
        let user = {
            name: 'Caleb',
            age: 29,
            location: 'San Antonio'
        }

        let app = {
            title: 'Indecision App',
            subtitle: 'Choosing a Path'


    }
        let templateTwo = (
            <div className="challenge">
                {/*Braces for vars*/}
                <h1>{user.name}</h1>
                <h2>{app.title}</h2>
                <h3>{app.subtitle}</h3>
                <p>Age: {user.age}</p>
                <p>Location: {user.location}</p>
            </div>
        );
        return (
            templateTwo

        );
    }
}

ReactDOM.render(
    <Indecision />,
    document.getElementById('root')
);