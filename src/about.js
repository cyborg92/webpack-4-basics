import React from 'react';
import {render} from 'react-dom';

const About=()=>{
    return(
        <div>
            <h1>About webpack</h1>
            <div id="imageDiv"></div>
        </div>
    )
}

render(
    <About/>,document.getElementById("target")
)
