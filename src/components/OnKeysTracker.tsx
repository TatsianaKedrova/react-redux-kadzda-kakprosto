import {useEffect, useState} from "react";

export const OnKeysTracker = () => {

    const [text, setText] = useState<string>('');
    console.log(`Component rendered with ${text}`);

    useEffect( () => {
        const handler = (e: KeyboardEvent)=> {
            console.log(e.key);
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
        }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}