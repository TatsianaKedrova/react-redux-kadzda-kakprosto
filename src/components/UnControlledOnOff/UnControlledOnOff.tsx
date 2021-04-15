import React, {useState} from "react";

type UnControlledOnOffPropsType = {
    onChange: (on: boolean) => void
}

function UnControlledOnOff(props: UnControlledOnOffPropsType) {

    const [on, setOn] = useState(false);
    console.log("on: " + on);


    const onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "20px",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        marginTop: "30px",
        backgroundColor: on ? "white" : "red"

    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "20px",
        // marginTop: "30px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}

export default UnControlledOnOff;