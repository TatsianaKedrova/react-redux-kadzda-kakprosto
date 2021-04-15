import React from "react";

type UnControlledAccordeonTitlePropsType = {
    title: string
    toggleCollapsed: () => void
}

function UnControlledAccordeonTitle(props: UnControlledAccordeonTitlePropsType) {
    return (
        <h1 onClick={props.toggleCollapsed}>
            ---{props.title}---
        </h1>
    )
}

export default UnControlledAccordeonTitle;