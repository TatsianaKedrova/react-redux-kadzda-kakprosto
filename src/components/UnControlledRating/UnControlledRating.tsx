import React, {useState} from "react";

type UnControlledRatingPropsType = {}

export function UnControlledRating(props: UnControlledRatingPropsType) {

    const [value, setValue] = useState(1);
    /*const boldTypeToggle = () => {
        setValue(prev => prev + 1);
    }*/

    return (
            <div>
                <Star selected={value > 0} setValue={() => { setValue(1) }}/>
                <Star selected={value > 1} setValue={() => { setValue(2) }}/>
                <Star selected={value > 2} setValue={() => { setValue(3) }}/>
                <Star selected={value > 3} setValue={() => { setValue(4) }}/>
                <Star selected={value > 4} setValue={() => { setValue(5) }}/>
            </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {

    // return props.selected ? <span onClick={props.boldToggle}><b>star </b> </span> : <span onClick={props.boldToggle}>star </span>
    return <span onClick={() => props.setValue()}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}