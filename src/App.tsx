import React from 'react';
import './App.css';
import {Clock} from "./components/Clock/Clock";


function App() {
    return (

        <div className="App">
            <Clock mode={'digital'}/>
            <Clock mode={'analog'}/>

        </div>
    );
}
export default App;

/* const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState(true);

    function collapsedData(collapsed: boolean) {
        return setCollapsed(!collapsed);
    }*/
/*
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    return (
        <h1>
            {props.title}
        </h1>
    )
}
*/







