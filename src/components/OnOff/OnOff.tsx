import React from "react";

type OnOffPropsType = {
    on: boolean
    setOn: (value: boolean) => void
}

function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "20px",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        marginTop: "30px",
        backgroundColor: props.on ? "white" : "red"

    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.setOn(true) }}>On</div>
            <div style={offStyle} onClick={() => { props.setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}

export default OnOff;


























