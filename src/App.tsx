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
        <TitleMenu/>
        <MenuList/>
    </div>
}

function TitleMenu(){
    return <h2>Menu</h2>
}

function MenuList(){
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App;
