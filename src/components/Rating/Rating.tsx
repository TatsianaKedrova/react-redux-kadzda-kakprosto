import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    /*const changeStar = () => {
        props.setRatingValue(props.value)
    }*/
        return (

            <div>
                <Star selected={props.value > 0} changeStar={props.setRatingValue} value={1} />
                <Star selected={props.value > 1} changeStar={props.setRatingValue} value={2} />
                <Star selected={props.value > 2} changeStar={props.setRatingValue} value={3} />
                <Star selected={props.value > 3} changeStar={props.setRatingValue} value={4} />
                <Star selected={props.value > 4} changeStar={props.setRatingValue} value={5} />

            </div>

        )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    changeStar: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {

    return <span onClick={() => {
        props.changeStar(props.value)}}>{props.selected ? <b>star </b> : "star "}</span>
}