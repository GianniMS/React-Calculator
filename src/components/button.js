import React from "react";
import "./style/button.css";

const Button = (props) => {
    return (
        <input className="button" type="button" value={props.label} onClick = {props.handleClick}/>
    );
};

export default Button;