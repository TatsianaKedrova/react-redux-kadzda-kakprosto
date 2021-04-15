import React, {useState} from "react";
import UnControlledAccordeonBody from "./UnControlledAccordeonBody";
import UnControlledAccordeonTitle from "./UnControlledAccordeonTitle";

type AccordeonPropsType = {
    title: string
}

function UnControlledAccordeon(props: AccordeonPropsType) {
    console.log("Uncontrolled accordeon rendering");

    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div>
            <UnControlledAccordeonTitle title={props.title} toggleCollapsed={toggleCollapsed}/>
            {collapsed && <UnControlledAccordeonBody />}

            {/*<button onClick={toggleCollapsed}>TOGGLE</button>*/}
        </div>
    );
}


export default UnControlledAccordeon;