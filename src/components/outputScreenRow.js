import React from "react";
import "./style/outputScreenRow.css";

const OutputScreenRow = (props) => {
    return (
        <div className="screen-row">
            <input className="sr-bar" type="text" readOnly value={props.value}/>
        </div>
    );
};

export default OutputScreenRow;