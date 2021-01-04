import React from 'react';
import ReactDOM from 'react-dom';

const square = function (x){
    return x*x;
}



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

        function getLocation(location) {
            if (location) {
                return <p>Location: {location}</p>;
            }
        }

        let app = {
            title: 'Indecision App',
            subtitle: 'Choosing a Path'
        }
        let templateTwo = (
            <div className="challenge">
                {/*Braces for vars, Ternary operator*/}

                <h1>{user.name ? user.name : 'Anonymous'}</h1>
                <h2>{app.title}</h2>
                <h3>{app.subtitle}</h3>
                <p>Age: {user.age}</p>
                {getLocation(user.location)}
            </div>
        );
        return (
            templateTwo

        );
    }
}

ReactDOM.render(
    <Indecision/>,
    document.getElementById('root')
);