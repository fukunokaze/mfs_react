import React from "react";

function Label(props){
    return(
        <span className="d-block float-start" style={{ width: '102px' }}>{props.Text}</span>
    );
}

export default Label;