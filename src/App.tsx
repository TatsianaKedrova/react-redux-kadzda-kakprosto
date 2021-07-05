import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating/Rating";
import {Clock} from "./components/Clock/Clock";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState(true);

    function collapsedData(collapsed: boolean) {
        return setCollapsed(!collapsed);
    }

    return (

        <div className="App">
            <Clock />

        </div>
    );
}

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

export default App;


{/*<PageTitle title={"This is App component"}/> */
}



