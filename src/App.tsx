import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import { Rating } from './components/Rating/Rating';

function App() {
  return (
    <div className="App">
        <AppTitle title = {"te"}/>
        <Rating value={2}/>
        <Accordion titleValue={"Ermek The Best"}/>
        <Accordion titleValue={"The Best"}/>
    </div>
  );
}

function AppTitle (props: any) {
    return <h1>{props.title}</h1>
}
export default App;
