import React from 'react';
import {render} from 'react-dom';
import './style.css';

const Greeting=()=>{
    return(
        <div>
            <h1>hello from react</h1>
            <div id="imageDiv"></div>
        </div>
    )
}

render(
    <Greeting/>,document.getElementById("target")
)
