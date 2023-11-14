import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <AppTitle></AppTitle>
        <Rating></Rating>
        <Accordion></Accordion>
    </div>
  );
}

function AppTitle () {
    return <h1>This is app component</h1>
}
// function hello() {
//     debugger
//     alert("Helloo");
// };
// hello();
// const App = () => {
//     return (
//         <div>
//             This is other function
//             <Rating></Rating>
//             <Accordion></Accordion>
//         </div>
//     )
// }

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>

        </div>
    )
}

function Star() {
    return (
       <span>Star </span>
    )
}


function Accordion() {
    return <div>
        <h3>Menu</h3>
        <ul>
            <li>2</li>
            <li>1</li>
            <li>3</li>
        </ul>
    </div>
}

export default App;
