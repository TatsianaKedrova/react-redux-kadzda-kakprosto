import {useEffect, useState} from "react";

export const SetTimooutExample = () => {
    const [text, setText] = useState("");

    console.log(`Component SetTimeoutExample rendered with: ${text}`);

    useEffect( () => {
        const timeoutId = setTimeout( () => {
            setText("3 seconds passed");
        }, 3000)

        return () => {
            clearTimeout(timeoutId);
        }
    }, [text])

    return (
        <div>
            text: {text}
        </div>
    )
}