import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}


function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true) {
        return <div>
        <TitleMenu title={props.titleValue}/>
        <MenuList/>
    </div>
    } else
    return <div>
        <TitleMenu title={props.titleValue}/>
    </div>
}

type TitleMenuProps = {
    title: string;
}

function TitleMenu(props: TitleMenuProps){
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