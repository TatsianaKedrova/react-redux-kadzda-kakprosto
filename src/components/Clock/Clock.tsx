import {useEffect, useState} from "react";

type ClockPropsType = {

}

export const Clock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    })

    const get2DigitsString = (number: number) => {
        return number < 10 ? '0' + number : number;
    }

    /*const hoursString = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutesString = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const secondsString = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();*/
       return (
        <div>
            <span>{get2DigitsString(date.getHours())}</span>
            :
            <span>{get2DigitsString(date.getMinutes())}</span>
            :
            <span>{get2DigitsString(date.getSeconds())}</span>
        </div>
    )
}