import React from "react";

type AccordeonTitlePropsType = {
    title: string
    changeCollapse: () => void
}

function AccordeonTitle(props: AccordeonTitlePropsType) {

    return (
        <h4
            onClick={props.changeCollapse}
        >{props.title}</h4>
    )
}

export default AccordeonTitle;