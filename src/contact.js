import React from 'react';
import {render} from 'react-dom';

const Contact=()=>{
    return(
        <div>
            <h1>Contact webpack</h1>
            <div id="imageDiv"></div>
        </div>
    )
}

render(
    <Contact/>,document.getElementById("target")
)
