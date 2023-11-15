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
        <Accordion titleValue={"Ermek The Best"} collapsed = {false}/>
        <Accordion titleValue={"The Best for West"} collapsed = {true}/>
    </div>
  );
}
type PageTitleProps = {
    title: string;
}

function AppTitle (props: PageTitleProps) {
    return <h1>{props.title}</h1>
}
export default App;
