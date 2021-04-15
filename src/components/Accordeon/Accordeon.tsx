import React from "react";
import AccordeonTitle from "./AccordeonTitle";
import AccordeonBody from "./AccordeonBody";

type AccordeonPropsType = {
    title: string
    collapsed: boolean
    changeCollapsed : (collapsed: boolean) => void
}

function Accordeon(props: AccordeonPropsType) {

    const changeCollapse = () => {
        props.changeCollapsed(props.collapsed)
    }
    return (
        <div>
            <AccordeonTitle title={props.title} changeCollapse={changeCollapse}/>
            {props.collapsed && <AccordeonBody/>}
        </div>
    );
}


export default Accordeon;