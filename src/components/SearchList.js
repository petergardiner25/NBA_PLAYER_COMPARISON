import React from "react";

export default function SearchList (props) {

    return(
        <>
        <li className="clicker" onClick={() => {
            props.setter(props.id);
            props.cleanUp();
        } }>
            {props.first + ' ' + props.last + ' — ' + props.team}
        </li>
        </>
    )
    
}
