import React from "react";

function Accordion(props: any) {
    return <div>
        <TitleMenu title={props.titleValue}/>
        <MenuList/>
    </div>
}

function TitleMenu(props: any){
    return <h2>{props.title}</h2>
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

export default Accordion