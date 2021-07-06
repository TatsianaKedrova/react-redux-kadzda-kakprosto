import {useEffect, useState} from "react";

export const ResetEffect = () => {

    const [counter, setCounter] = useState(1);
    console.log(`Component rendered with ${counter}`);

    useEffect( () => {
        console.log(`Effect occurred: ${counter}`);

        return () => {
            console.log(`Reset effect: ${counter} `);
        }
    }, [counter])

    const increase = () => {
        setCounter(prev => prev + 1)
    }
    return (
        <div>
            Hello, counter: {counter}
            <div>
                <button onClick={increase}>+</button>
            </div>
        </div>
    )
}