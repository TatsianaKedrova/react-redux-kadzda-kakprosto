import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating/Rating";
import Accordeon from "./components/Accordeon/Accordeon";
import UnControlledAccordeon from "./components/UnControlledAccordeon/UnControlledAccordeon";
import OnOff from "./components/OnOff/OnOff";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState(true);

    function collapsedData(collapsed: boolean) {
        return setCollapsed(!collapsed);
    }

    return (

        <div className="App">
            {/*<Accordeon*/}
            {/*    title={"Menu"}*/}
            {/*    collapsed={collapsed}*/}
            {/*    changeCollapsed={collapsedData}/>*/}
            {/*    <hr/>*/}
            {/*    <Accordeon*/}
            {/*    title={"Users"}*/}
            {/*    collapsed={collapsed}*/}
            {/*    changeCollapsed={collapsedData}/>*/}
            {/*    <hr/>*/}
            {/*<UnControlledAccordeon title={"Menu"}/>*/}
            {/*<UnControlledAccordeon title={"Users"}/>*/}

            <OnOff on={on} setOn={ setOn }/>
            <UnControlledOnOff onChange={setOn} />
            {on.toString()}


            {/*<Rating value={1}/>
            <Rating value={2}/>*/}
            {/*<Rating value={ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<Rating value={4}/>
            <Rating value={5}/>
            <hr />*/}
            {/*<UnControlledRating />*/}

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



